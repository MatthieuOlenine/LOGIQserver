const fs = require('fs');
const path = require('path');
const filePathEnCl = path.join(__dirname, '../DataBase/DataEntrClient.json');
const filePathPr = path.join(__dirname, '../DataBase/DataProduct.json');

class EntrHistoricManager {
    constructor() {
        this.fs = fs;
        this.path = path;
        this.filePathEnCl = filePathEnCl;
        this.filePathPr = filePathPr;
        this.EntrClientStruct = {};
        try {
            const data = this.fs.readFileSync(this.filePathEnCl, 'utf8');
            this.DataEnCl = JSON.parse(data);
        } catch (error) {
            console.error('Erreur lors de la récupération du fichiers clients entreprises', error);
        }
        try {
            const data = this.fs.readFileSync(this.filePathPr, 'utf8');
            this.DataPr = JSON.parse(data);
        } catch (error) {
            console.error('Erreur lors de la récupération du fichiers produits', error);
        }
    }

    AddEntrHistoric(_address, _sku) {
        let product;
        for (let i of this.DataPr) {
            if (i.sku === _sku) {
                i.nbcmd += 1;
                product = i;
                break
            }
        }
        for (let j of this.DataEnCl) {
            if (j.address === _address) {
                let productCOPY = {...product, state:'com', date:Date()}
                j.historic.push(productCOPY)
                }
            }
        this.UpToDateEnCl();
        this.UpToDatePr()
    }

    DelEntrHistoric(_address, _sku) {
        for (let i of this.DataEnCl) {
            if (i.address === _address) {
                for (let j of i.historic) {
                    if (j.sku === _sku) {
                        i.historic = i.historic.filter(j => j.sku !== _sku);
                    }
                }
            }
        }
        this.UpToDateEnCl()
    }

    SetEntrHistoric(_address, _sku, _parameter, _value) {
        for (let i of this.DataEnCl) {
            if (i.address === _address) {
                for (let j of i.historic) {
                    if (j.sku === _sku && _parameter == 'state') {
                        j[_parameter] = _value
                    }
                }
            }
        }
        this.UpToDateEnCl()
    }

    ReadEntrHistoric(_address, _sku, _parameter) {
        for (let i of this.DataEnCl) {
            if (i.address === _address) {
                for (let j of i.historic) {
                    if (j.sku === _sku) {
                        return j[_parameter]
                    }
                }
            }
        }
    }

    UpToDateEnCl() {
        try {
            this.fs.writeFileSync(this.filePathEnCl, JSON.stringify(this.DataEnCl, null, 2), 'utf8');
            console.log('Opération enregistrés avec succès');
        } catch (error) {
            console.error('Erreur lors de L\'enregistrement de l\'opération', error);
        }
    }

    UpToDatePr() {
        try {
            this.fs.writeFileSync(this.filePathPr, JSON.stringify(this.DataPr, null, 2), 'utf8');
            console.log('Opération enregistrés avec succès');
        } catch (error) {
            console.error('Erreur lors de L\'enregistrement de l\'opération', error);
        }
    }
}

module.exports = EntrHistoricManager;