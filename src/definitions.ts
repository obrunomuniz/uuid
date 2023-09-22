export interface UniqueDeviceIDPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
