const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../DataBase/DataClient.json');

class ClientManager {
    constructor() {
        this.fs = fs;
        this.path = path;
        this.filePath = filePath;
        this.ClientStruct = {};
        this.Data = []
        try {
            const data = this.fs.readFileSync(this.filePath, 'utf8');
            this.Data = JSON.parse(data);
        } catch (error) {
            console.error('Erreur lors de la récupération du fichiers clients', error);
        }
    }

    AddClient(_password, _firstname, _lastname, _birth, _mail, _num) {
        for (let i of this.Data) {
            if (i.mail === _mail) {
                console.log('Adresse mail dèjà utilisée');                    
                return
            }
        }
        this.ClientStruct = {
            address : crypto.createHash('sha256').update(_mail).digest('hex'),
            password : _password,
            firstname : _firstname,
            lastname : _lastname,
            birth : _birth,
            mail : _mail,
            num : _num,
            creationdate : Date(),
            lastco : Date(),
            historic : []
        }
        this.Data.push(this.ClientStruct)
        this.UpToDate()
    }

    DelClient(_address) {
        for (let i of this.Data) {
            if (i.address === _address) {
                this.Data = this.Data.filter(i => i.address !== _address);
            }
        }
        this.UpToDate()
    }

    SetClient(_address, _parameter, _value) {
        for (let i of this.Data) {
            if (i.address === _address && _parameter !== 'address' && _parameter !== 'creationdate' && _parameter !== 'lastco' && _parameter !== 'historic') {
                i[_parameter] = _value;
            }
        }
        this.UpToDate()
    }

    ReadClient(_address, _parameter) {
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

module.exports = ClientManager;