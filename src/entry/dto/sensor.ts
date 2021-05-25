
export interface RegisterResponseDTO {
  id: string,
}

export interface RegisterSensorDTO {
  name: string,
  sensorType: string[],
}

export interface SensorStoreDTO {
  id: string,
  data: SensorInfoDTO, 
}

export interface SensorInfoDTO {
  humidity: number | null,
  ultra_ray: number | null,
  temperature: number | null,
}
