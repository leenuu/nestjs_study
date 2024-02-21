import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "testKey",
      signOptions: {
        expiresIn: '5m'
      }
    })
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
