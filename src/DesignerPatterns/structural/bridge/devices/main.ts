import { remoteControl } from '../remoteControl';
import { remoteControlWithVolume } from '../remoteControllWithVolume';
import { Radio } from './radio';
import { Tv } from './tv';

function clientControle(
  abstraction: remoteControl | remoteControlWithVolume,
): void {
  abstraction.togglePower();
  if (!('volumeUp' in abstraction)) return;
  abstraction.volumeUp(); //
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControll = new remoteControl(radio);

clientControle(radioRemoteControll);
console.log(radio.getPower());
