import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { ControlObjectV1 } from './ControlObjectV1';
import { IControlObjectsClientV1 } from './IControlObjectsClientV1';
export declare class ControlObjectsLambdaClientV1 extends CommandableLambdaClient implements IControlObjectsClientV1 {
    constructor(config?: any);
    getObjects(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ControlObjectV1>) => void): void;
    getRandomControlObject(correlationId: string, filter: FilterParams, callback: (err: any, object: ControlObjectV1) => void): void;
    getObjectById(correlationId: string, objectId: string, callback: (err: any, object: ControlObjectV1) => void): void;
    createObject(correlationId: string, object: ControlObjectV1, callback: (err: any, object: ControlObjectV1) => void): void;
    updateObject(correlationId: string, object: ControlObjectV1, callback: (err: any, object: ControlObjectV1) => void): void;
    deleteObjectById(correlationId: string, objectId: string, callback: (err: any, object: ControlObjectV1) => void): void;
    setDevice(correlationId: string, object_id: string, device_id: string, callback: (err: any, object: ControlObjectV1) => void): void;
    unsetDevice(correlationId: string, object_id: string, callback: (err: any, object: ControlObjectV1) => void): void;
    addGroup(correlationId: string, object_id: string, group_id: string, callback: (err: any, object: ControlObjectV1) => void): void;
    removeGroup(correlationId: string, object_id: string, group_id: string, callback: (err: any, object: ControlObjectV1) => void): void;
}
