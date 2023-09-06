import { Body, Controller, Get, Req, Post, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import * as jwt from 'jsonwebtoken';
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {

    }

    @Get('getallproducts')
    async getAllProducts(@Req() req: any) {
        try {
            // const token = req.headers['x-access-token']
            // const decoded: any = jwt.verify(token, 'seceretKey123');
            // const username = decoded.username
            // console.log("PAYLOADDDDD:::::", username);
            // if (!username) {
            //     return { status: 'error', error: 'Invalid token' }
            // } else {
            const productList = await this.productService.getAllProducts()
            return { status: 'success', data: productList }
            // }


        } catch (error) {
            console.log("ERROR:::::", error);

        }
    }

}
