
export interface RegisterResponseDTO {
  id: string,
}

export interface RegisterSensorDTO {
  name: string,
  type: string,
}

export interface SensorListDTO {
  // sensors: SensorInfoDTO[]
  sensors: Array<SensorInfoDTO>
}

export interface SensorInfoDTO {
  id: string,
  dataType: string,
  value: number | null,
}
