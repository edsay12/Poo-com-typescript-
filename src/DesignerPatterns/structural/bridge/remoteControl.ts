import DeviceImplementation from './DeviceImplementation';

export class remoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(`${this.device.getName} Esta ${this.device.getPower}`);
  }
}
