import {
  Body, 
  Controller, 
  Get, 
  Path, 
  Post, 
  Query, 
  Route, 
  SuccessResponse, 
} from "tsoa";
import { User } from "../entry/dto/user";
import { UsersService, UserCreationParams } from "../service/usersServices";

@Route("users")
export class UserController extends Controller {
  @Get("{userID}")
  public async getUser(
    @Path() userID: number, 
    @Query() name?: string
  ): Promise<User>{
    return new UsersService().get(userID, name);
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createUser(
    @Body() reqBody: UserCreationParams
  ): Promise<void> {
    console.log("here");
    this.setStatus(201);
    console.log(new UsersService().create(reqBody));
    return;
  }
}
