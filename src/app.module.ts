import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017/Shop_Online'), UsersModule, ProductModule
  ],
  exports: [MongooseModule.forRoot('mongodb://localhost:27017/Shop_Online')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
