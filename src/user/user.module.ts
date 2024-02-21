import { Module } from "@nestjs/common"
import {AuthController} from "src/controller/controller.auth"
import { UserService } from "./user.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { UserRepository } from "./user.repository"
import { AuthModule } from "src/auth/auth.module"

@Module({
    imports: [TypeOrmModule.forFeature([User]), AuthModule],
    controllers: [AuthController],
    providers: [UserService, UserRepository]
})

export class UserModule {};