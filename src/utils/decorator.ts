import { Request } from 'express'
import { Session } from 'inspector';
import { NoSuchSession } from '@/error';


// export function SignInRequire() {

  // return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // const originMethod = descriptor.value;

    // eslint-disable-next-line no-param-reassign
    // descriptor.value = function func(req: Request, ...args: any[]) {
      // const { session }: { session: Session | undefined } = req;
      // if(session === undefined){
        // throw new NoSuchSession();
      // }

      // return originMethod.call(this, req, ...args);
    // };

    // return descriptor;
  // };
// }

