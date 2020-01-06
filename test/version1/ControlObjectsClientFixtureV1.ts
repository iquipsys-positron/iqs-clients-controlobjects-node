let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { ControlObjectV1 } from '../../src/version1/ControlObjectV1';
import { IControlObjectsClientV1 } from '../../src/version1/IControlObjectsClientV1';

let OBJECT1: ControlObjectV1 = {
    id: '1',
    org_id: '1',
    category: 'person',
    type: 'employee',
    name: 'Object 1',
    description: 'Control object #1',
    device_id: '1',
    group_ids: ['1', '2']
};
let OBJECT2: ControlObjectV1 = {
    id: '2',
    org_id: '1',
    category: 'person',
    type: 'visitor',
    name: 'Object 2',
    description: 'Control object #2',
    device_id: '2',
    group_ids: ['1', '2']
};

export class ControlObjectsClientFixtureV1 {
    private _client: IControlObjectsClientV1;
    
    constructor(client: IControlObjectsClientV1) {
        this._client = client;
    }
        
    testCrudOperations(done) {
        let object1, object2;

        async.series([
        // Create one object
            (callback) => {
                this._client.createObject(
                    null,
                    OBJECT1,
                    (err, object) => {
                        assert.isNull(err);

                        assert.isObject(object);
                        assert.equal(object.name, OBJECT1.name);
                        assert.equal(object.description, OBJECT1.description);
                        assert.equal(object.category, OBJECT1.category);
                        assert.equal(object.type, OBJECT1.type);
                    
                        object1 = object;

                        callback();
                    }
                );
            },
        // Create another object
            (callback) => {
                this._client.createObject(
                    null,
                    OBJECT2,
                    (err, object) => {
                        assert.isNull(err);

                        assert.isObject(object);
                        assert.equal(object.name, OBJECT2.name);
                        assert.equal(object.description, OBJECT2.description);
                        assert.equal(object.category, OBJECT2.category);
                        assert.equal(object.type, OBJECT2.type);
                    
                        object2 = object;

                        callback();
                    }
                );
            },
        // Get all objects
            (callback) => {
                this._client.getObjects(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, objects) => {
                        assert.isNull(err);

                        assert.isObject(objects);
                        assert.isTrue(objects.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the object
            (callback) => {
                object1.name = 'Updated object 1';

                this._client.updateObject(
                    null,
                    object1,
                    (err, object) => {
                        assert.isNull(err);

                        assert.isObject(object);
                        assert.equal(object.name, 'Updated object 1');
                        assert.equal(object.id, object1.id);

                        object1 = object;

                        callback();
                    }
                );
            },
        // Delete object
            (callback) => {
                this._client.deleteObjectById(
                    null,
                    object1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete object
            (callback) => {
                this._client.getObjectById(
                    null,
                    object1.id,
                    (err, object) => {
                        assert.isNull(err);
                        
                        assert.isNotNull(object);
                        assert.isTrue(object.deleted);

                        callback();
                    }
                );
            }
        ], done);
    }
}
