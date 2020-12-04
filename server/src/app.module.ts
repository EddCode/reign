import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ArticleModule } from './Articles/article.module'
import { ApiModule } from './Algolia/api.module'
@Module({
  imports: [
    ArticleModule,
    ApiModule,
    MongooseModule.forRoot(process.env.DB_URL, { useNewUrlParser: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
