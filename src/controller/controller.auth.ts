import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, Res} from "@nestjs/common";
import { LoginDto } from "src/dto/user/login-dto";
import { RegistDto } from "src/dto/user/regist-dto";
import { UserService } from "src/user/user.service";
import { ResponseEntity } from "./response-entity";
import { classToPlain } from "@nestjs/class-transformer";
import { AuthService } from "src/auth/auth.service";


@Controller("auth")
export class AuthController {
    constructor(private userSerive: UserService, private authService: AuthService) { }

    @Post("regist")
    async createUser(@Body() dto: RegistDto): Promise<any> {
        console.log(dto);
        await this.userSerive.createUser(dto);
        return classToPlain(ResponseEntity.created<string>().message("Regist Success").data(""));
    }

    @Post("login")
    @HttpCode(HttpStatus.CREATED)
    async loginUser(@Body() dto: LoginDto): Promise<any> {
        const user = await this.userSerive.findUser(dto);  
        const token = this.authService.login(user);
        return classToPlain(ResponseEntity.created().message("Login Success").data(token));
    }
}