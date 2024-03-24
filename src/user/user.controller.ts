import { Controller, Post, Body, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ResponseEntity } from "src/utill/response.utill";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("regist")
  async createUser(@Body() dto: CreateUserDto): Promise<any> {
    console.log(dto);
    await this.userService.createUser(dto);
    return ResponseEntity.create(HttpStatus.CREATED, "Regist Success", "");
  }
}
