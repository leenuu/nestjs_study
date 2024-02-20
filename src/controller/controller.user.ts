import { Body, Controller, Post } from '@nestjs/common';
import { RegistDto } from 'src/user/regist-dto';

@Controller('user')
export class UsersController {
    @Post('regist')
    async createUser(@Body() dto: RegistDto): Promise<void> {
        console.log(dto);
    }
}