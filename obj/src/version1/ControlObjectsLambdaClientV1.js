"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class ControlObjectsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('control_objects');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getObjects(correlationId, filter, paging, callback) {
        this.callCommand('get_objects', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getRandomControlObject(correlationId, filter, callback) {
        this.callCommand('get_random_object', correlationId, {
            fitler: filter
        }, callback);
    }
    getObjectById(correlationId, objectId, callback) {
        this.callCommand('get_object_by_id', correlationId, {
            object_id: objectId
        }, callback);
    }
    createObject(correlationId, object, callback) {
        this.callCommand('create_object', correlationId, {
            object: object
        }, callback);
    }
    updateObject(correlationId, object, callback) {
        this.callCommand('update_object', correlationId, {
            object: object
        }, callback);
    }
    deleteObjectById(correlationId, objectId, callback) {
        this.callCommand('delete_object_by_id', correlationId, {
            object_id: objectId
        }, callback);
    }
    setDevice(correlationId, object_id, device_id, callback) {
        this.callCommand('set_device', correlationId, {
            object_id: object_id,
            device_id: device_id
        }, callback);
    }
    unsetDevice(correlationId, object_id, callback) {
        this.callCommand('unset_device', correlationId, {
            object_id: object_id
        }, callback);
    }
    addGroup(correlationId, object_id, group_id, callback) {
        this.callCommand('add_group', correlationId, {
            object_id: object_id,
            group_id: group_id
        }, callback);
    }
    removeGroup(correlationId, object_id, group_id, callback) {
        this.callCommand('remove_group', correlationId, {
            object_id: object_id,
            group_id: group_id
        }, callback);
    }
}
exports.ControlObjectsLambdaClientV1 = ControlObjectsLambdaClientV1;
//# sourceMappingURL=ControlObjectsLambdaClientV1.js.map