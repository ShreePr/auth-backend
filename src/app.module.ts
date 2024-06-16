import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ ignoreEnvFile: true, cache: true, isGlobal: true, expandVariables: true, envFilePath: '.env' }),
    UserModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.uzsmtso.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_APP_NAME}`)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
