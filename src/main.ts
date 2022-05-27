import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ "origin": 'https://realtors-homes.netlify.app/'});
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
