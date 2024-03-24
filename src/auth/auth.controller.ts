import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { ResponseEntity } from "src/utill/response.utill";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() dto: LoginUserDto): Promise<any> {
    return ResponseEntity.create(
      HttpStatus.CREATED,
      "Login Success",
      await this.authService.validateUser(dto),
    );
  }
}
