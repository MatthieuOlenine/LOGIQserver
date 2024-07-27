const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../DataBase/DataProduct.json');

class ProductManager {
    constructor() {
        this.fs = fs;
        this.path = path;
        this.filePath = filePath;
        this.ProductStruct = {};
        this.Data = []
        try {
            const data = this.fs.readFileSync(this.filePath, 'utf8');
            this.Data = JSON.parse(data);
        } catch (error) {
            console.error('Erreur lors de la récupération du fichiers produits', error);
        }
    }

    AddProduct(_product, _description, _price, _img) {
        for (let i of this.Data) {
            if (i.product === _product) {
                console.log('Produit déjà éxistant');                    
                return
            }
        }
        this.ProductStruct = {
            sku : crypto.createHash('sha256').update(_product).digest('hex'),
            product : _product,
            description : _description,
            price : _price,
            img : _img,
            nbcmd : 0,
            disp : true,
        }
        this.Data.push(this.ProductStruct)
        this.UpToDate()
    }

    DelProduct(_sku) {
        for (let i of this.Data) {
            if (i.sku === _sku) {
                this.Data = this.Data.filter(i => i.sku !== _sku);
            }
        }
        this.UpToDate()
    }

    SetProduct(_sku, _parameter, _value) {
        for (let i of this.Data) {
            if (i.sku === _sku && _parameter !== 'sku' && _parameter !== 'nbcmd') {
                i[_parameter] = _value;
            }
        }
        this.UpToDate()
    }

    ReadProduct(_sku, _parameter) {
        for (let i of this.Data) {
            if (i.sku === _sku) {
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

module.exports = ProductManager;