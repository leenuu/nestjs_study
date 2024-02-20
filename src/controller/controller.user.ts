import { Body, Controller, Post } from '@nestjs/common';
import { RegistDto } from 'src/dto/user/regist-dto';
import { UserService } from 'src/user/user.service';


@Controller('user')
export class UserController {
    constructor(private userSerive: UserService) { }

    @Post('regist')
    async createUser(@Body() dto: RegistDto): Promise<void> {
        console.log(dto);
        await this.userSerive.createUser(dto);
    }
}