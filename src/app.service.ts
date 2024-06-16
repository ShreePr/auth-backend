import { Injectable } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
