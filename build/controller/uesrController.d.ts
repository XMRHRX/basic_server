import { Controller } from "tsoa";
import { User } from "../entry/dto/user";
import { UserCreationParams } from "../service/usersServices";
export declare class UserController extends Controller {
    getUser(userID: number, name?: string): Promise<User>;
    createUser(reqBody: UserCreationParams): Promise<void>;
}
