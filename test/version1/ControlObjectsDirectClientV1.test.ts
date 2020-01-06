let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ControlObjectsMemoryPersistence } from 'iqs-services-controlobjects-node';
import { ControlObjectsController } from 'iqs-services-controlobjects-node';
import { IControlObjectsClientV1 } from '../../src/version1/IControlObjectsClientV1';
import { ControlObjectsDirectClientV1 } from '../../src/version1/ControlObjectsDirectClientV1';
import { ControlObjectsClientFixtureV1 } from './ControlObjectsClientFixtureV1';

suite('ControlObjectsDirectClientV1', ()=> {
    let client: ControlObjectsDirectClientV1;
    let fixture: ControlObjectsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ControlObjectsMemoryPersistence();
        let controller = new ControlObjectsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-controlobjects', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-controlobjects', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ControlObjectsDirectClientV1();
        client.setReferences(references);

        fixture = new ControlObjectsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
