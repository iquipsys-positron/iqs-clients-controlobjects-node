import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IControlObjectsClientV1 } from './IControlObjectsClientV1';
import { ControlObjectV1 } from './ControlObjectV1';

export class ControlObjectsNullClientV1 implements IControlObjectsClientV1 {
            
    public getObjects(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ControlObjectV1>) => void): void {
        callback(null, new DataPage<ControlObjectV1>([], 0));
    }

    public getObjectById(correlationId: string, objectId: string, 
        callback: (err: any, object: ControlObjectV1) => void): void {
        callback(null, null);
    }

    public createObject(correlationId: string, object: ControlObjectV1, 
        callback: (err: any, object: ControlObjectV1) => void): void {
        callback(null, object);
    }

    public updateObject(correlationId: string, object: ControlObjectV1, 
        callback: (err: any, object: ControlObjectV1) => void): void {
        callback(null, object);
    }

    public deleteObjectById(correlationId: string, objectId: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        callback(null, null);
    }

    public setDevice(correlationId: string, object_id: string, device_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        callback(null, null);
    }

    public unsetDevice(correlationId: string, object_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        callback(null, null);
    }

    public addGroup(correlationId: string, object_id: string, group_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        callback(null, null);
    }

    public removeGroup(correlationId: string, object_id: string, group_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        callback(null, null);
    }

}