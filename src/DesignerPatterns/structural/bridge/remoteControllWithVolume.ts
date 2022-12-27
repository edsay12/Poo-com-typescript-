import DeviceImplementation from './DeviceImplementation';
import { remoteControl } from './remoteControl';

export class remoteControlWithVolume extends remoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume + 1);
    console.log(`Volume era ${oldVolume} e agr e ${this.device.getVolume()}`);
  }
}
