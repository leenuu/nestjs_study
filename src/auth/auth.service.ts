import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}
    
    login(user: User) {
        const payload = { username: user.name, sub: user.userId };
        return this.jwtService.sign(payload)
    }
}
