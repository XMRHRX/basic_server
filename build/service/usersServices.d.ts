import { User } from '../entry/dto/user';
export declare type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;
export declare class UsersService {
    get(id: number, name?: string): User;
    create(userCreationParams: UserCreationParams): User;
}
