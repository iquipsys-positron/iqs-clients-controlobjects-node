let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { IControlObjectsClientV1 } from '../../src/version1/IControlObjectsClientV1';
import { ControlObjectsMemoryClientV1 } from '../../src/version1/ControlObjectsMemoryClientV1';
import { ControlObjectsClientFixtureV1 } from './ControlObjectsClientFixtureV1';

suite('ControlObjectsMemoryClientV1', ()=> {
    let client: ControlObjectsMemoryClientV1;
    let fixture: ControlObjectsClientFixtureV1;

    setup(() => {
        client = new ControlObjectsMemoryClientV1();
        fixture = new ControlObjectsClientFixtureV1(client);
    });
    
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
