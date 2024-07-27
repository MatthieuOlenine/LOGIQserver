const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../DataBase/DataEntrClient.json');

class EntrClientManager {
    constructor() {
        this.fs = fs;
        this.path = path;
        this.filePath = filePath;
        this.EntrClientStruct = {};
        this.Data = []
        try {
            const data = this.fs.readFileSync(this.filePath, 'utf8');
            this.Data = JSON.parse(data);
        } catch (error) {
            console.error('Erreur lors de la récupération du fichiers clients entreprises', error);
        }
    }

    AddEntrClient(_password, _title, _mail, _num, _siret) {
        for (let i of this.Data) {
            if (i.mail === _mail && i.siret === _siret) {
                console.log('Adresse mail ou numéro SIRET dèjà utilisée');                    
                return
            }
        }
        this.EntrClientStruct = {
            address : crypto.createHash('sha256').update(_mail).digest('hex'),
            password : _password,
            title : _title,
            mail : _mail,
            num : _num,
            siret : _siret,
            creationdate : Date(),
            lastco : Date(),
            historic : []
        }
        this.Data.push(this.EntrClientStruct)
        this.UpToDate()
    }

    DelEntrClient(_address) {
        for (let i of this.Data) {
            if (i.address === _address) {
                this.Data = this.Data.filter(i => i.address !== _address);
            }
        }
        this.UpToDate()
    }

    SetEntrClient(_address, _parameter, _value) {
        for (let i of this.Data) {
            if (i.address === _address && _parameter !== 'address' && _parameter !== 'creationdate' && _parameter !== 'lastco' && _parameter !== 'historic') {
                i[_parameter] = _value;
            }
        }
        this.UpToDate()
    }

    ReadEntrClient(_address, _parameter) {
        for (let i of this.Data) {
            if (i.address === _address) {
                return i[_parameter]
            }
        }
    }

    UpToDate() {
        try {
            this.fs.writeFileSync(this.filePath, JSON.stringify(this.Data, null, 2), 'utf8');
            console.log('Opération enregistrés avec succès');
        } catch (error) {
            console.error('Erreur lors de L\'enregistrement de l\'opération', error);
        }
    }
}

module.exports = EntrClientManager;