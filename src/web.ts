import { WebPlugin } from '@capacitor/core';

import type { UniqueDeviceIDPlugin } from './definitions';

export class UniqueDeviceIDWeb
  extends WebPlugin
  implements UniqueDeviceIDPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
