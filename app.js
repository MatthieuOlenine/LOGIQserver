const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4815;

app.use(bodyParser.json()); // Pour analyser le JSON dans le corps des requêtes

// ici sont apellés les fonctions des class DataProductManager, DataClientManager, DataHistoricManager, DataEntrClientManager et DataEntrHistoricManager

const ProductManager = require('./DataManager/DataProductManager'); // Chemin relatif vers le fichier DataProductManager.js
const ClientManager = require('./DataManager/DataClientManager'); // Chemin relatif vers le fichier DataClientManager.js
const HistoricManager = require('./DataManager/DataHistoricManager'); // Chemin relatif vers le fichier DataHistoricManager.js
const EntrClientManager = require('./DataManager/DataEntrClientManager'); // Chemin relatif vers le fichier DataEntrClientManager.js
const EntrHistoricManager = require('./DataManager/DataEntrHistoricManager'); // Chemin relatif vers le fichier DataEntrHistoricManager.js

// Créer une instance de ClientManager, ProductManager, HistoricManager, EntrClientManager et EntrHistoricManager

const ProductInstance = new ProductManager();
const ClientInstance = new ClientManager();
const HistoricInstance = new HistoricManager();
const EntrClientInstance = new EntrClientManager();
const EntrHistoricInstance = new EntrHistoricManager();

// API des méthodes produits

app.post('/API/ProductInstance/AddProduct', (req, res) => {
    const { _name, _desc, _price, _img } = req.body;
    ProductInstance.AddProduct(_name, _desc, _price, _img);
    res.send(true)
});

app.post('/API/ProductInstance/DelProduct', (req, res) => {
    const { _sku } = req.body;
    ProductInstance.DelProduct(_sku);
    res.send(true)
});

app.post('/API/ProductInstance/SetProduct', (req, res) => {
    const { _sku, _parameter, _value } = req.body;
    ProductInstance.AddProduct(_sku, _parameter, _value);
    res.send(true)
});

app.get('/API/ProductInstance/ReadProduct', (req, res) => {
    const { _sku, _parameter } = req.body;
    const Data = ProductInstance.AddProduct(_sku, _parameter);
    res.send(Data)
});

// API des méthodes clients

app.post('/API/ClientInstance/AddClient', (req, res) => {
    const { _password, _firstname, _lastname, _birth, _mail, _num } = req.body;
    ClientInstance.AddClient(_password, _firstname, _lastname, _birth, _mail, _num);
    res.send(true)
});

app.post('/API/ClientInstance/DelClient', (req, res) => {
    const { _address } = req.body;
    ClientInstance.AddClient(_address);
    res.send(true)
});

app.post('/API/ClientInstance/SetClient', (req, res) => {
    const { _address, _parameter, _value } = req.body;
    ClientInstance.AddClient(_address, _parameter, _value);
    res.send(true)
});

app.get('/API/ClientInstance/ReadClient', (req, res) => {
    const { _address, _parameter } = req.body;
    const Data = ClientInstance.AddClient(_address, _parameter);
    res.send(Data)
});

// API des méthodes historique-clients

app.post('/API/HistoricInstance/AddHistoric', (req, res) => {
    const { _address, _sku } = req.body;
    HistoricInstance.AddHistoric(_address, _sku);
    res.send(true)
});

app.post('/API/HistoricInstance/DelHistoric', (req, res) => {
    const { _address, _sku } = req.body;
    HistoricInstance.DelHistoric(_address, _sku);
    res.send(true)
});

app.post('/API/HistoricInstance/SetHistoric', (req, res) => {
    const { _address, _sku, _parameter, _value } = req.body;
    HistoricInstance.AddHistoric(_address, _sku, _parameter, _value);
    res.send(true)
});

app.get('/API/HistoricInstance/ReadHistoric', (req, res) => {
    const { _address, _sku, _parameter } = req.body;
    const Data = HistoricInstance.AddHistoric(_address, _sku, _parameter);
    res.send(Data)
});

// API des méthodes entreprise-clientes

app.post('/API/EntrClientInstance/AddEntrClient', (req, res) => {
    const { _password, _title, _mail, _num, _siret } = req.body;
    EntrClientInstance.AddEntrClient(_password, _title, _mail, _num, _siret);
    res.send(true)
});

app.post('/API/EntrClientInstance/DelEntrClient', (req, res) => {
    const { _address } = req.body;
    EntrClientInstance.DelEntrClient(_address);
    res.send(true)
});

app.post('/API/EntrClientInstance/SetEntrClient', (req, res) => {
    const { _address, _parameter, _value } = req.body;
    EntrClientInstance.SetEntrClient(_address, _parameter, _value);
    res.send(true)
});

app.post('/API/EntrClientInstance/ReadEntrClient', (req, res) => {
    const { _address, _parameter } = req.body;
    const Data = EntrClientInstance.ReadEntrClient(_address, _parameter);
    res.send(Data)
});

// API des méthodes historiques-entreprise-clientes

app.post('/API/EntrHistoricInstance/AddEntrHistoric', (req, res) => {
    const { _address, _sku } = req.body;
    EntrHistoricInstance.AddEntrHistoric(_address, _sku);
    res.send(true)
});

app.post('/API/EntrHistoricInstance/DelEntrHistoric', (req, res) => {
    const { _address, _sku } = req.body;
    EntrHistoricInstance.DelEntrHistoric(_address, _sku);
    res.send(true)
});

app.post('/API/EntrHistoricInstance/SetEntrHistoric', (req, res) => {
    const { _address, _sku, _parameter, _value } = req.body;
    EntrHistoricInstance.SetEntrHistoric(_address, _sku, _parameter, _value);
    res.send(true)
});

app.post('/API/EntrHistoricInstance/ReadEntrHistoric', (req, res) => {
    const { _address, _sku, _parameter } = req.body;
    const Data = EntrHistoricInstance.ReadEntrHistoric(_address, _sku, _parameter);
    res.send(Data)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
