
export interface IAISetting{
    Authorization: string,
    limit?: number,
    offset?: number,
    format?: string,
    locationName: string[],
    elementName?: string[],
    sort?: 'time',
    startTime?: string[]
    dataTime?: string[],
    timeFrom?: string, //string($date-time)
    timeTo?: string, //string($date-time)
}
