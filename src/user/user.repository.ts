import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
        this.userRepository = userRepository;
    }

    findUser(userId: string): Promise<User> {
        return this.userRepository.findOneBy({ userId });
    }
    
    async saveUser(user: User): Promise<void> {
        await this.userRepository.save(user);
    }
}