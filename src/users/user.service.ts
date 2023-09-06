import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { exit } from 'process';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<any>) { }

    async createUser(userPayload) {
        console.log("userpayload", userPayload);
        const user = await this.userModel.findOne({ username: userPayload.username })
        console.log("user:::::", user);

        if (user) {
            console.log("user", user);

            return user
        } else {
            console.log("no user");

            const newUser = await new this.userModel({ ...userPayload, status: 'exist' }).save()
            console.log("new user::::::", newUser);

            return ({ status: 'created' })
        }

    }



    async getUserDetails(userPayload) {
        console.log("userpayload", userPayload);

        const details = await this.userModel.findOne({ 'username': userPayload.username })
        console.log("details::::", details);

        return details;

    }
}
