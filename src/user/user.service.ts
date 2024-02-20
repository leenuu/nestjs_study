import { Injectable } from "@nestjs/common";
import { RegistDto } from "src/dto/user/regist-dto";
import { UserRepository } from "./user.repository";
import { User, UserBuilder } from "./user.entity";

@Injectable()
export class UserService {
    constructor(private userRepo: UserRepository) { }

    async createUser(dto: RegistDto) {
        const user = new UserBuilder()
                        .setDto(dto)
                        .build();

        this.userRepo.saveUser(user);        
    }
}