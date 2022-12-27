import DeviceImplementation from '../DeviceImplementation';

export class Tv implements DeviceImplementation {
  private volume = 10;
  private power = false;
  private name = 'Tv';
  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
  getName(): string {
    return this.name;
  }
  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
}
