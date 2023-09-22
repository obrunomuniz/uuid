import { registerPlugin } from '@capacitor/core';

import type { UniqueDeviceIDPlugin } from './definitions';

const UniqueDeviceID = registerPlugin<UniqueDeviceIDPlugin>('UniqueDeviceID', {
  web: () => import('./web').then(m => new m.UniqueDeviceIDWeb()),
});

export * from './definitions';
export { UniqueDeviceID };
