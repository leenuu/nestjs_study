import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { comparePassword, encryptionPassword } from "src/utill/bycrpt.utill";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto) {
    const password = await encryptionPassword(dto.password);
    await this.repo.save({
      userId: dto.userId,
      password: password,
      email: dto.email,
      name: dto.name,
      enabled: true,
    });
  }

  async findOneBy(userId: string): Promise<User> {
    return this.repo.findOneBy({
      userId: userId,
    });
  }
}
