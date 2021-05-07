import { Response } from 'express';

export abstract class APIErrors extends Error {
  public type?: string;

  constructor(type?: string, message?: string) {
    super(message)
    this.type = type || 'api'; 
  }

  public static failedWithStatus(res: Response, statusCode: number, payload?: Object): void {
    let code: number = statusCode;
    let json: Object = {
      'status': 'fail'
    }

    if(payload !== undefined){
      json = { ...json, ...payload}
    }
    res.status(code).json(json);
  }
}
