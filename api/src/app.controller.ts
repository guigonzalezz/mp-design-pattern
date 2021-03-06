import { Controller, Get, Res, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('embaralhar')
  async shufflePhrase(@Query('frase') phrase: string, @Res() response){
    const data = await  this.appService.shufflePhrase(phrase)
    response.status(200).json(data)
  }
}
