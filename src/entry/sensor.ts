
export interface IRegisterSensor {
  type: string,
}

export interface ISensor{
  id: string,
  dataType: string,
  value: number | null,
}
