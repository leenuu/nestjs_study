import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/user.entity";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "test",
        database: "testDB",
        entities: [User], 
        synchronize: false,
    }),
    UserModule,
    AuthModule],
})
export class AppModule {}
