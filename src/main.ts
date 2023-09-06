import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MongoClient } from 'mongodb'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'http:localhost:4000']
  })

  await app.listen(4000);

}
bootstrap();
