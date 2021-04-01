
export class NoSuchPageError extends Error {

  constructor(url: string, GET_param?: Array<string>){
    //TODO: handle GET_param to exception message.
    super("page not found: "+url);
  }

}
