import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  
  shufflePhrase(): string {
    return 'Hello World!';
  }
}
