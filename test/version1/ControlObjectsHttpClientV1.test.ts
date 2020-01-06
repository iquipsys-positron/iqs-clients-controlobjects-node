let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ControlObjectsMemoryPersistence } from 'iqs-services-controlobjects-node';
import { ControlObjectsController } from 'iqs-services-controlobjects-node';
import { ControlObjectsHttpServiceV1 } from 'iqs-services-controlobjects-node';
import { IControlObjectsClientV1 } from '../../src/version1/IControlObjectsClientV1';
import { ControlObjectsHttpClientV1 } from '../../src/version1/ControlObjectsHttpClientV1';
import { ControlObjectsClientFixtureV1 } from './ControlObjectsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ControlObjectsRestClientV1', ()=> {
    let service: ControlObjectsHttpServiceV1;
    let client: ControlObjectsHttpClientV1;
    let fixture: ControlObjectsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ControlObjectsMemoryPersistence();
        let controller = new ControlObjectsController();

        service = new ControlObjectsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-controlobjects', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-controlobjects', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-controlobjects', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ControlObjectsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ControlObjectsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
