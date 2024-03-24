import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";
import { comparePassword } from "src/utill/bycrpt.utill";
import { LoginUserDto } from "./dto/login-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userSerivce: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(dto: LoginUserDto): Promise<{ token: string }> {
    const user: User = await this.userSerivce.findOneBy(dto.userId);
    const validatePassword = await comparePassword(
      dto.password,
      user?.password,
    );

    if (!user || !validatePassword) throw new UnauthorizedException();

    const payload: Payload = {
      userId: user.userId,
      email: user.email,
    };
    return await {
      token: this.jwtService.sign(payload),
    };
  }

  async tokenValidateUser(payload: Payload): Promise<User> {
    return await this.userSerivce.findOneBy(payload.userId);
  }
}

export class Payload {
  readonly userId: string;
  readonly email: string;
}
