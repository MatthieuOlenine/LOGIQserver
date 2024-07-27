const fs = require('fs');
const path = require('path');
const filePathCl = path.join(__dirname, '../DataBase/DataClient.json');
const filePathPr = path.join(__dirname, '../DataBase/DataProduct.json');

class HistoricManager {
    constructor() {
        this.fs = fs;
        this.path = path;
        this.filePathCl = filePathCl;
        this.filePathPr = filePathPr;
        this.ClientStruct = {};
        try {
            const data = this.fs.readFileSync(this.filePathCl, 'utf8');
            this.DataCl = JSON.parse(data);
        } catch (error) {
            console.error('Erreur lors de la récupération du fichiers clients', error);
        }
        try {
            const data = this.fs.readFileSync(this.filePathPr, 'utf8');
            this.DataPr = JSON.parse(data);
        } catch (error) {
            console.error('Erreur lors de la récupération du fichiers produits', error);
        }
    }

    AddHistoric(_address, _sku) {
        let product;
        for (let i of this.DataPr) {
            if (i.sku === _sku) {
                i.nbcmd += 1;
                product = i;
                break
            }
        }
        for (let j of this.DataCl) {
            if (j.address === _address) {
                let productCOPY = {...product, state:'com', date:Date()}
                j.historic.push(productCOPY)
            }
        }
        this.UpToDateCl();
        this.UpToDatePr()
    }

    DelHistoric(_address, _sku) {
        for (let i of this.DataCl) {
            if (i.address === _address) {
                for (let j of i.historic) {
                    if (j.sku === _sku) {
                        i.historic = i.historic.filter(j => j.sku !== _sku);
                    }
                }
            }
        }
        this.UpToDateCl()
    }

    SetHistoric(_address, _sku, _parameter, _value) {
        for (let i of this.DataCl) {
            if (i.address === _address) {
                for (let j of i.historic) {
                    if (j.sku === _sku && _parameter == 'state') {
                        j[_parameter] = _value
                    }
                }
            }
        }
        this.UpToDateCl()
    }

    ReadHistoric(_address, _sku, _parameter) {
        for (let i of this.DataCl) {
            if (i.address === _address) {
                for (let j of i.historic) {
                    if (j.sku === _sku) {
                        return j[_parameter]
                    }
                }
            }
        }
    }

    UpToDateCl() {
        try {
            this.fs.writeFileSync(this.filePathCl, JSON.stringify(this.DataCl, null, 2), 'utf8');
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

module.exports = HistoricManager;