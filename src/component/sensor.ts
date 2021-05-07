
function getID(){
  return 1;
}

export abstract class Sensor {
  protected id: number;

  constructor(){
    this.id = getID();
  }
  public abstract detect(): number;
}

export class HumiditySensor extends Sensor {
  private humidity?: number;

  public detect() {
    /* implement */
    return 0;
  }

}

export class UltraRaySensor extends Sensor {
  private ultra_ray?: number;

  public detect() {
    /* implement */
    return 0;
  }



}
