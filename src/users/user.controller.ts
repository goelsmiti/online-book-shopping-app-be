import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs'
import { log } from 'console';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {

    }
    @Post('login')
    async loginUser(@Req() req: any, @Body() payload: any) {
        try {
            console.log("PAYLOAD:::::", payload);
            const user = await this.userService.getUserDetails(payload);
            if (!user) {
                return { status: 'error', error: 'Invalid login' }

            } else {
                const isPasswordValid = await bcrypt.compare(
                    payload.password,
                    user.password
                )
                console.log("In else ");

                if (isPasswordValid) {
                    console.log('pwd vaild');

                    const token = jwt.sign({
                        username: user.username,
                    }, 'seceretKey123');
                    return ({
                        user, token
                    })

                }

            }

        } catch (error) {
            console.log("ERROR:::::", error);

        }
    }


    @Post('/signup')

    async signUpUser(@Req() req: any, @Body() payload: any) {
        try {
            console.log("PAYLOAD:::::", payload);
            const newPassword = await bcrypt.hash(payload.password, 10)
            const result = await this.userService.createUser({ ...payload, 'password': newPassword }
            )
            console.log("SIGN UP RESULT:::", result);

            return result

        } catch (error) {
            console.log("ERROR:::::", error);

        }
    }
}
