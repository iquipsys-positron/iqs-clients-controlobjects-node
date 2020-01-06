"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
class ControlObjectsMemoryClientV1 {
    constructor() {
        this._objects = [];
    }
    matchString(value, search) {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }
    matchSearch(item, search) {
        search = search.toLowerCase();
        if (this.matchString(item.name, search))
            return true;
        if (this.matchString(item.description, search))
            return true;
        if (this.matchString(item.pin, search))
            return true;
        if (this.matchString(item.phone, search))
            return true;
        return false;
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_node_1.FilterParams();
        let search = filter.getAsNullableString('search');
        let id = filter.getAsNullableString('id');
        let category = filter.getAsNullableString('category');
        let type = filter.getAsNullableString('type');
        let orgId = filter.getAsNullableString('org_id');
        let objectId = filter.getAsNullableString('object_id');
        let deleted = filter.getAsBooleanWithDefault('deleted', false);
        return (item) => {
            if (id && item.id != id)
                return false;
            if (category && item.category != category)
                return false;
            if (type && item.type != type)
                return false;
            if (orgId && item.org_id != orgId)
                return false;
            if (objectId && item.object_id != objectId)
                return false;
            if (!deleted && item.deleted)
                return false;
            if (search && !this.matchSearch(item, search))
                return false;
            return true;
        };
    }
    getObjects(correlationId, filter, paging, callback) {
        let objects = _.filter(this._objects, this.composeFilter(filter));
        callback(null, new pip_services3_commons_node_2.DataPage(objects, objects.length));
    }
    getObjectById(correlationId, objectId, callback) {
        let object = _.find(this._objects, o => o.id == objectId);
        callback(null, object);
    }
    createObject(correlationId, object, callback) {
        object.id = object.id || pip_services3_commons_node_3.IdGenerator.nextLong();
        this._objects.push(object);
        callback(null, object);
    }
    updateObject(correlationId, object, callback) {
        this._objects = _.filter(this._objects, o => o.id != object.id);
        this._objects.push(object);
        callback(null, object);
    }
    deleteObjectById(correlationId, objectId, callback) {
        let object = _.find(this._objects, o => o.id == objectId);
        if (object)
            object.deleted = true;
        callback(null, object);
    }
    setDevice(correlationId, object_id, device_id, callback) {
        let object = _.find(this._objects, o => o.id == object_id);
        if (object)
            object.device_id = device_id;
        callback(null, object);
    }
    unsetDevice(correlationId, object_id, callback) {
        let object = _.find(this._objects, o => o.id == object_id);
        if (object)
            object.device_id = null;
        callback(null, object);
    }
    addGroup(correlationId, object_id, group_id, callback) {
        let object = _.find(this._objects, o => o.id == object_id);
        if (object) {
            object.group_ids = _.filter(object.group_ids, i => i != group_id);
            object.group_ids.push(group_id);
        }
        callback(null, object);
    }
    removeGroup(correlationId, object_id, group_id, callback) {
        let object = _.find(this._objects, o => o.id == object_id);
        if (object)
            object.group_ids = _.filter(object.group_ids, i => i != group_id);
        callback(null, object);
    }
}
exports.ControlObjectsMemoryClientV1 = ControlObjectsMemoryClientV1;
//# sourceMappingURL=ControlObjectsMemoryClientV1.js.map