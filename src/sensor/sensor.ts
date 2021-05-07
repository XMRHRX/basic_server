

export interface Sensor {
  detect(): number;
}

export class hSensor implements Sensor {
  private humidity?: number;

  constructor(){
  }

  public detect(): number{
    /* implement */
    return 0;
  }
}
