import { Module } from "@nestjs/common";
import { JWTService } from "./jwt.services";

@Module({ providers: [JWTService] })
export class JwtModule {}
