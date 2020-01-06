let _ = require('lodash');

import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IdGenerator } from 'pip-services3-commons-node';

import { IControlObjectsClientV1 } from './IControlObjectsClientV1';
import { ControlObjectV1 } from './ControlObjectV1';

export class ControlObjectsMemoryClientV1 implements IControlObjectsClientV1 {
    private _objects: ControlObjectV1[]  = [];

    private matchString(value: string, search: string): boolean {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }

    private matchSearch(item: ControlObjectV1, search: string): boolean {
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

    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        
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

    public getObjects(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ControlObjectV1>) => void): void {
        let objects = _.filter(this._objects, this.composeFilter(filter));
        callback(null, new DataPage<ControlObjectV1>(objects, objects.length));
    }

    public getObjectById(correlationId: string, objectId: string, 
        callback: (err: any, object: ControlObjectV1) => void): void {
        let object = _.find(this._objects, o => o.id == objectId);
        callback(null, object);
    }

    public createObject(correlationId: string, object: ControlObjectV1, 
        callback: (err: any, object: ControlObjectV1) => void): void {

        object.id = object.id || IdGenerator.nextLong();
        this._objects.push(object);

        callback(null, object);
    }

    public updateObject(correlationId: string, object: ControlObjectV1, 
        callback: (err: any, object: ControlObjectV1) => void): void {

        this._objects = _.filter(this._objects, o => o.id != object.id);
        this._objects.push(object);

        callback(null, object);
    }

    public deleteObjectById(correlationId: string, objectId: string,
        callback: (err: any, object: ControlObjectV1) => void): void {

        let object = _.find(this._objects, o => o.id == objectId);
        if (object) object.deleted = true;

        callback(null, object);
    }

    public setDevice(correlationId: string, object_id: string, device_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {

        let object = _.find(this._objects, o => o.id == object_id);
        if (object) object.device_id = device_id;

        callback(null, object);
    }

    public unsetDevice(correlationId: string, object_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {

        let object = _.find(this._objects, o => o.id == object_id);
        if (object) object.device_id = null;

        callback(null, object);
    }

    public addGroup(correlationId: string, object_id: string, group_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {

        let object = _.find(this._objects, o => o.id == object_id);
        if (object) {
            object.group_ids = _.filter(object.group_ids, i => i != group_id);
            object.group_ids.push(group_id);
        }

        callback(null, object);
    }

    public removeGroup(correlationId: string, object_id: string, group_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {

        let object = _.find(this._objects, o => o.id == object_id);
        if (object)
            object.group_ids = _.filter(object.group_ids, i => i != group_id);

        callback(null, object);
    }

}