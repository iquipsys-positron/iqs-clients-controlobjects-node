"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class ControlObjectsNullClientV1 {
    getObjects(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getObjectById(correlationId, objectId, callback) {
        callback(null, null);
    }
    createObject(correlationId, object, callback) {
        callback(null, object);
    }
    updateObject(correlationId, object, callback) {
        callback(null, object);
    }
    deleteObjectById(correlationId, objectId, callback) {
        callback(null, null);
    }
    setDevice(correlationId, object_id, device_id, callback) {
        callback(null, null);
    }
    unsetDevice(correlationId, object_id, callback) {
        callback(null, null);
    }
    addGroup(correlationId, object_id, group_id, callback) {
        callback(null, null);
    }
    removeGroup(correlationId, object_id, group_id, callback) {
        callback(null, null);
    }
}
exports.ControlObjectsNullClientV1 = ControlObjectsNullClientV1;
//# sourceMappingURL=ControlObjectsNullClientV1.js.map