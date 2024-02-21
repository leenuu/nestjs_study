import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt/jwt.jwtstrategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "testkey",
      signOptions: {
        expiresIn: '60'
      }
    })
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
