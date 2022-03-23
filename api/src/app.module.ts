import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phrase } from './phrase.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cdbr-east-04.cleardb.com',
      port: 3306,
      username: 'b0b23f5b60600a',
      password: '94d9aa21',
      database: 'heroku_983b52bdaa14f6c',
      entities: [Phrase],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Phrase])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//Server=us-cdbr-east-04.cleardb.com;Database=heroku_983b52bdaa14f6c;Uid=b0b23f5b60600a;pwd=94d9aa21