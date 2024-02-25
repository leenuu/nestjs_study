import { Controller, Post, Body, HttpStatus } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ResponseEntity } from "src/utill/response.utill";
import { LoginUserDto } from "./dto/login-user.dto";
import { comparePassword } from "src/utill/bycrpt.utill";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("regist")
    async createUser(@Body() dto: CreateUserDto): Promise<any> {
        console.log(dto);
        await this.userService.createUser(dto);
        return ResponseEntity.create(HttpStatus.CREATED, "Regist Success", "");
    }

    @Post("login")
    async login(@Body() dto: LoginUserDto): Promise<any> {
        const user = await this.userService.findOneBy(dto.userId);
        if (user! || (await comparePassword(dto.password, user.password)))
            return ResponseEntity.create(
                HttpStatus.CREATED,
                "Login Success",
                "",
            );
        else
            return ResponseEntity.create(
                HttpStatus.UNAUTHORIZED,
                "Login Fail",
                "",
            );
    }
}
