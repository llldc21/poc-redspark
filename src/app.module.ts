import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      // validationSchema: Joi.object({
      //   PORT: Joi.number().default(4000),
      //   NODE_ENV: Joi.string().default('development'),
      //   DB_HOST: Joi.string().required(),
      //   DB_PORT: Joi.number().required(),
      //   DB_USERNAME: Joi.string().required(),
      //   DB_PASSWORD: Joi.string().required(),
      //   DB_DATABASE: Joi.string().required(),
      //   DB_SSL: Joi.boolean().required(),
      // }),
    }),
    DatabaseModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
