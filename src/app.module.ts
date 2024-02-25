import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { User } from "./user/entities/user.entity";
import { UserModule } from "./user/user.module";
import { ProjectModule } from "./project/project.module";
import { JwtModule } from "./jwt/jwt.module";

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
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        UserModule,
        ProjectModule,
        JwtModule,
    ],
})
export class AppModule {}
