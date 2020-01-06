"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const ControlObjectsNullClientV1_1 = require("../version1/ControlObjectsNullClientV1");
const ControlObjectsMemoryClientV1_1 = require("../version1/ControlObjectsMemoryClientV1");
const ControlObjectsDirectClientV1_1 = require("../version1/ControlObjectsDirectClientV1");
const ControlObjectsHttpClientV1_1 = require("../version1/ControlObjectsHttpClientV1");
const ControlObjectsLambdaClientV1_1 = require("../version1/ControlObjectsLambdaClientV1");
class ControlObjectsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ControlObjectsClientFactory.NullClientV1Descriptor, ControlObjectsNullClientV1_1.ControlObjectsNullClientV1);
        this.registerAsType(ControlObjectsClientFactory.MemoryClientV1Descriptor, ControlObjectsMemoryClientV1_1.ControlObjectsMemoryClientV1);
        this.registerAsType(ControlObjectsClientFactory.DirectClientV1Descriptor, ControlObjectsDirectClientV1_1.ControlObjectsDirectClientV1);
        this.registerAsType(ControlObjectsClientFactory.HttpClientV1Descriptor, ControlObjectsHttpClientV1_1.ControlObjectsHttpClientV1);
        this.registerAsType(ControlObjectsClientFactory.LambdaClientV1Descriptor, ControlObjectsLambdaClientV1_1.ControlObjectsLambdaClientV1);
    }
}
exports.ControlObjectsClientFactory = ControlObjectsClientFactory;
ControlObjectsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-controlobjects', 'factory', 'default', 'default', '1.0');
ControlObjectsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-controlobjects', 'client', 'null', 'default', '1.0');
ControlObjectsClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-controlobjects', 'client', 'memory', 'default', '1.0');
ControlObjectsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-controlobjects', 'client', 'direct', 'default', '1.0');
ControlObjectsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-controlobjects', 'client', 'http', 'default', '1.0');
ControlObjectsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-controlobjects', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=ControlObjectsClientFactory.js.map