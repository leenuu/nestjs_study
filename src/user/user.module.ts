import { Module } from "@nestjs/common"
import {UserController} from "src/controller/controller.user"
import { UserService } from "./user.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { UserRepository } from "./user.repository"

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService, UserRepository]
})

export class UserModule {};