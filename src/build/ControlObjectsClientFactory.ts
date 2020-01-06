import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { ControlObjectsNullClientV1 } from '../version1/ControlObjectsNullClientV1';
import { ControlObjectsMemoryClientV1 } from '../version1/ControlObjectsMemoryClientV1';
import { ControlObjectsDirectClientV1 } from '../version1/ControlObjectsDirectClientV1';
import { ControlObjectsHttpClientV1 } from '../version1/ControlObjectsHttpClientV1';
import { ControlObjectsLambdaClientV1 } from '../version1/ControlObjectsLambdaClientV1';

export class ControlObjectsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-controlobjects', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-controlobjects', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('iqs-services-controlobjects', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-controlobjects', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-controlobjects', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-controlobjects', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ControlObjectsClientFactory.NullClientV1Descriptor, ControlObjectsNullClientV1);
		this.registerAsType(ControlObjectsClientFactory.MemoryClientV1Descriptor, ControlObjectsMemoryClientV1);
		this.registerAsType(ControlObjectsClientFactory.DirectClientV1Descriptor, ControlObjectsDirectClientV1);
		this.registerAsType(ControlObjectsClientFactory.HttpClientV1Descriptor, ControlObjectsHttpClientV1);
		this.registerAsType(ControlObjectsClientFactory.LambdaClientV1Descriptor, ControlObjectsLambdaClientV1);
	}
	
}
