import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IControlObjectsClientV1 } from './IControlObjectsClientV1';
//import { IControlObjectsController } from 'iqs-services-controlobjects-node';
import { ControlObjectV1 } from './ControlObjectV1';

export class ControlObjectsDirectClientV1 extends DirectClient<any> implements IControlObjectsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-controlobjects", "controller", "*", "*", "*"))
    }

    public getObjects(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ControlObjectV1>) => void): void {
        let timing = this.instrument(correlationId, 'control_objects.get_objects');
        this._controller.getObjects(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getObjectById(correlationId: string, objectId: string, 
        callback: (err: any, object: ControlObjectV1) => void): void {
        let timing = this.instrument(correlationId, 'control_objects.get_object_by_id');
        this._controller.getObjectById(correlationId, objectId, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }

    public createObject(correlationId: string, object: ControlObjectV1, 
        callback: (err: any, object: ControlObjectV1) => void): void {
        let timing = this.instrument(correlationId, 'control_objects.create_object');
        this._controller.createObject(correlationId, object, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }

    public updateObject(correlationId: string, object: ControlObjectV1, 
        callback: (err: any, object: ControlObjectV1) => void): void {
        let timing = this.instrument(correlationId, 'control_objects.update_object');
        this._controller.updateObject(correlationId, object, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }

    public deleteObjectById(correlationId: string, objectId: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        let timing = this.instrument(correlationId, 'control_objects.delete_object_by_id');
        this._controller.deleteObjectById(correlationId, objectId, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }

    public setDevice(correlationId: string, object_id: string, device_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        let timing = this.instrument(correlationId, 'control_objects.set_device');
        this._controller.setDevice(correlationId, object_id, device_id, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }

    public unsetDevice(correlationId: string, object_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        let timing = this.instrument(correlationId, 'control_objects.unset_device');
        this._controller.unsetDevice(correlationId, object_id, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }

    public addGroup(correlationId: string, object_id: string, group_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        let timing = this.instrument(correlationId, 'control_objects.add_group');
        this._controller.addGroup(correlationId, object_id, group_id, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }

    public removeGroup(correlationId: string, object_id: string, group_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        let timing = this.instrument(correlationId, 'control_objects.remove_group');
        this._controller.removeGroup(correlationId, object_id, group_id, (err, object) => {
            timing.endTiming();
            callback(err, object);
        });
    }

}