import { Injectable, UnauthorizedException } from "@nestjs/common";
import { RegistDto } from "src/dto/user/regist-dto";
import { UserRepository } from "./user.repository";
import { User } from "./user.entity";
import { LoginDto } from "src/dto/user/login-dto";
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
    constructor(private userRepo: UserRepository) { }

    async createUser(dto: RegistDto): Promise<void> {
        const user = new User();
        user.userId = dto.userId;
        user.password = await this.encryptionPassword(dto.password);
        user.email = dto.email;
        user.name = dto.name;
        user.enabled = true;
                
        await this.userRepo.saveUser(user);  
    }

    async findUser(dto: LoginDto): Promise<User> {
        const user = await this.userRepo.findUser(dto.userId);
        const validatePassword = await this.checkPassword(user, dto); 
        if(!user || !validatePassword)
            throw new UnauthorizedException();
        
        return user;
    }

    private async encryptionPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);  
    }

    private async checkPassword(user: User, dto: LoginDto): Promise<boolean> {
        return await bcrypt.compare(dto.password, user.password);
    }
}