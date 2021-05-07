import { APIErrors } from './api';
import { Request, Response, NextFunction } from 'express';

export abstract class SessionError extends APIErrors {

  constructor(type?: string, message?: string){
    super(`session.${type}`, message);
  }

}

export class NoSuchSession extends SessionError {
  constructor(message?: string){
    super('no-such-session', message);
  }

  public static handle = (err: NoSuchSession, req: Request, res: Response, next: NextFunction):  Response | void => {
    APIErrors.failedWithStatus(res, 400, { type: err.type });
  };
}

export function handleSessionError(err: SessionError, req: Request, res: Response, next: NextFunction) {
  if(err instanceof NoSuchSession){
    NoSuchSession.handle(err, req, res, next);
  }
  APIErrors.failedWithStatus(res, 400, {
    type: err.type,
    error: err.message
  })
}
