// ici sont apellés les fonctions des class DataProductManager, DataClientManager et DataHistoricManager

const ClientManager = require('./DataManager/DataClientManager'); // Chemin relatif vers le fichier DataClientManager.js
const ProductManager = require('./DataManager/DataProductManager'); // Chemin relatif vers le fichier DataProductManager.js
const HistoricManager = require('./DataManager/DataHistoricManager'); // Chemin relatif vers le fichier DataHistoricManager.js
const EntrClientManager = require('./DataManager/DataEntrClientManager'); // Chemin relatif vers le fichier DataEntrClientManager.js
const EntrHistoricManager = require('./DataManager/DataEntrHistoricManager'); // Chemin relatif vers le fichier DataEntrHistoricManager.js

// Créer une instance de ClientManager, ProductManager et HistoricManager
const ClientInstance = new ClientManager();
const ProductInstance = new ProductManager();
const HistoricInstance = new HistoricManager();
const EntrClientInstance = new EntrClientManager();
const EntrHistoricInstance = new EntrHistoricManager();

// Appeler les méthodes Clients
//ClientInstance.AddClient('motdepass', 'John', 'Doe', '1990-01-01', 'a@exemple.com', '1234567890');
//ClientInstance.DelClient('28b9b69680be22bf5b9311cc36fbd10041c78d8bb11872cab0383344ee25ec96');
//ClientInstance.SetClient('6be4b1e7e3a778c84784af7f35cbea8f8e42527bd33443cffe4eece08f4623db', 'firstname', 'damien');
//ClientInstance.ReadClient('08168cd80dfd534ab0f10af10f1303fe00af2d43ab5c1432360d137f8197e17a', 'firstname');

// Appeler les méthodes Produits
//ProductInstance.AddProduct('myyyyyoto', 'grosse moto', 2445, ['img1', 'img2', 'img3']);
//ProductInstance.DelProduct('7dbb8b144228e2f24fe4279cb204bedbf97914cff022a18a1e73ddfd49b310c4');
//ProductInstance.SetProduct('65c74c15a686187bb6bbf9958f494fc6b80068034a659a9ad44991b08c58f2d2', 'product', 'trotinette');
//ProductInstance.ReadProduct('08168cd80dfd534ab0f10af10f1303fe00af2d43ab5c1432360d137f8197e17a', 'product');

// Appeler les méthodes Historics
//HistoricInstance.AddHistoric('ac957b1b0894f3bf04fd370b038bcc09b69d541153f0ea4b1eea88c9926a5851', '7dbb8b144228e2f24fe4279cb204bedbf97914cff022a18a1e73ddfd49b310c4');
//HistoricInstance.DelHistoric('08168cd80dfd534ab0f10af10f1303fe00af2d43ab5c1432360d137f8197e17a', '7dbb8b144228e2f24fe4279cb204bedbf97914cff022a18a1e73ddfd49b310c4');
//HistoricInstance.SetHistoric('08168cd80dfd534ab0f10af10f1303fe00af2d43ab5c1432360d137f8197e17a', '7dbb8b144228e2f24fe4279cb204bedbf97914cff022a18a1e73ddfd49b310c4', 'state', "livré");
//HistoricInstance.ReadHistoric('08168cd80dfd534ab0f10af10f1303fe00af2d43ab5c1432360d137f8197e17a', '7dbb8b144228e2f24fe4279cb204bedbf97914cff022a18a1e73ddfd49b310c4', 'product');

// Appeler les méthodes Clients Entreprises
//EntrClientInstance.AddEntrClient('motdepass', 'amazon', 'officiel@amazon.com', '1234567890', '012345678910111213141516');
//EntrClientInstance.DelEntrClient('b939c11f3cd5b4168d39b8f5e6b659afb3bccc900b8e985307a50147bf804af6');
//EntrClientInstance.SetEntrClient('b939c11f3cd5b4168d39b8f5e6b659afb3bccc900b8e985307a50147bf804af6', 'title', 'decathlon');
//EntrClientInstance.ReadEntrClient('08168cd80dfd534ab0f10af10f1303fe00af2d43ab5c1432360d137f8197e17a', 'title');

// Appeler les méthodes Historics Entreprises
//EntrHistoricInstance.AddEntrHistoric('7efa608006a63dad56bd87cbec0fb22ac961e87964011966f7ab7edeb4802799', '98e66eefaa765d390cc9785ecee30adba9cda758f64475da6066d569da043445');
//EntrHistoricInstance.DelEntrHistoric('b939c11f3cd5b4168d39b8f5e6b659afb3bccc900b8e985307a50147bf804af6', '65c74c15a686187bb6bbf9958f494fc6b80068034a659a9ad44991b08c58f2d2');
//EntrHistoricInstance.SetEntrHistoric('b939c11f3cd5b4168d39b8f5e6b659afb3bccc900b8e985307a50147bf804af6', '65c74c15a686187bb6bbf9958f494fc6b80068034a659a9ad44991b08c58f2d2', 'state', "expédié");
//EntrHistoricInstance.ReadEntrHistoric('08168cd80dfd534ab0f10af10f1303fe00af2d43ab5c1432360d137f8197e17a', '7dbb8b144228e2f24fe4279cb204bedbf97914cff022a18a1e73ddfd49b310c4', 'product');