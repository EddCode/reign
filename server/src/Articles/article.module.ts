
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule';


import { ArticleController } from './infrastructure/article.controller';
import { ArticleService } from './useCases/article.service';
import { ArticleSchema } from './domain/articles.shcema';
import { ApiService } from '../Algolia/useCases/api.service'

@Module({
  imports: [
    ScheduleModule.forRoot(),
    HttpModule,
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService, ApiService],
})
export class ArticleModule {}