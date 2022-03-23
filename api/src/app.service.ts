import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Phrase } from './phrase.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Phrase)
    private phraseRepository: Repository<Phrase>
  ) {}
  
  async shufflePhrase(phrase: string): Promise<string> {
    const oldPhrase = phrase;
    const exist = await this.phraseRepository.findOne({ where:{oldPhrase}})
    let newPhrase = ''
    if(exist) newPhrase = "This phrase already exists"
    else {
      const arr = phrase.split(" ")
      const n = arr.length
      for(var i = n - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
      }
  
      newPhrase = arr.join(" ")
      await this.phraseRepository.save({newPhrase,oldPhrase})
    }
    return newPhrase
  }
}
