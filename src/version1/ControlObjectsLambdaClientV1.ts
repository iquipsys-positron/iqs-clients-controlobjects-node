let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { ControlObjectV1 } from './ControlObjectV1';
import { IControlObjectsClientV1 } from './IControlObjectsClientV1';

export class ControlObjectsLambdaClientV1 extends CommandableLambdaClient implements IControlObjectsClientV1 {       

    constructor(config?: any) {
        super('control_objects');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getObjects(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ControlObjectV1>) => void): void {
        this.callCommand( 
            'get_objects', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getRandomControlObject(correlationId: string, filter: FilterParams,
        callback: (err: any, object: ControlObjectV1) => void): void {
        this.callCommand( 
            'get_random_object',
            correlationId,
            {
                fitler: filter
            }, 
            callback
        );        
    }

    public getObjectById(correlationId: string, objectId: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        this.callCommand( 
            'get_object_by_id',
            correlationId,
            {
                object_id: objectId
            }, 
            callback
        );        
    }

    public createObject(correlationId: string, object: ControlObjectV1,
        callback: (err: any, object: ControlObjectV1) => void): void {
        this.callCommand(
            'create_object',
            correlationId,
            {
                object: object
            }, 
            callback
        );
    }

    public updateObject(correlationId: string, object: ControlObjectV1,
        callback: (err: any, object: ControlObjectV1) => void): void {
        this.callCommand(
            'update_object', 
            correlationId,
            {
                object: object
            }, 
            callback
        );
    }

    public deleteObjectById(correlationId: string, objectId: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        this.callCommand(
            'delete_object_by_id', 
            correlationId,
            {
                object_id: objectId
            }, 
            callback
        );
    }

    public setDevice(correlationId: string, object_id: string, device_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        this.callCommand(
            'set_device', 
            correlationId,
            {
                object_id: object_id,
                device_id: device_id
            }, 
            callback
        );
    }

    public unsetDevice(correlationId: string, object_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        this.callCommand(
            'unset_device', 
            correlationId,
            {
                object_id: object_id
            }, 
            callback
        );
    }

    public addGroup(correlationId: string, object_id: string, group_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        this.callCommand(
            'add_group', 
            correlationId,
            {
                object_id: object_id,
                group_id: group_id
            }, 
            callback
        );
    }

    public removeGroup(correlationId: string, object_id: string, group_id: string,
        callback: (err: any, object: ControlObjectV1) => void): void {
        this.callCommand(
            'remove_group', 
            correlationId,
            {
                object_id: object_id,
                group_id: group_id
            }, 
            callback
        );
    }

}
