"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ControlObjectsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-controlobjects", "controller", "*", "*", "*"));
    }
    getObjects(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'control_objects.get_objects');
        this._controller.getObjects(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getObjectById(correlationId, objectId, callback) {
        let timing = this.instrument(correlationId, 'control_objects.get_object_by_id');
        this._controller.getObjectById(correlationId, objectId, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }
    createObject(correlationId, object, callback) {
        let timing = this.instrument(correlationId, 'control_objects.create_object');
        this._controller.createObject(correlationId, object, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }
    updateObject(correlationId, object, callback) {
        let timing = this.instrument(correlationId, 'control_objects.update_object');
        this._controller.updateObject(correlationId, object, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }
    deleteObjectById(correlationId, objectId, callback) {
        let timing = this.instrument(correlationId, 'control_objects.delete_object_by_id');
        this._controller.deleteObjectById(correlationId, objectId, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }
    setDevice(correlationId, object_id, device_id, callback) {
        let timing = this.instrument(correlationId, 'control_objects.set_device');
        this._controller.setDevice(correlationId, object_id, device_id, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }
    unsetDevice(correlationId, object_id, callback) {
        let timing = this.instrument(correlationId, 'control_objects.unset_device');
        this._controller.unsetDevice(correlationId, object_id, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }
    addGroup(correlationId, object_id, group_id, callback) {
        let timing = this.instrument(correlationId, 'control_objects.add_group');
        this._controller.addGroup(correlationId, object_id, group_id, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }
    removeGroup(correlationId, object_id, group_id, callback) {
        let timing = this.instrument(correlationId, 'control_objects.remove_group');
        this._controller.removeGroup(correlationId, object_id, group_id, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }
}
exports.ControlObjectsDirectClientV1 = ControlObjectsDirectClientV1;
//# sourceMappingURL=ControlObjectsDirectClientV1.js.map