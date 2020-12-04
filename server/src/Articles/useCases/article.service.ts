import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from '../domain/articles.interface';
import { CreateArticleDTO } from '../domain/create-article.dto';
import { ApiService } from '../../Algolia/useCases/api.service'
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
    private apiService: ApiService
  ) {}

  async getAllArticles(): Promise<Article[]> {
    const articles = await this.articleModel.find().exec();

    return articles;
  }

 @Cron('* 1 * * *')
  async createBatchArticles(): Promise<Article[]>{
    const res = await this.apiService.getArticules()
    const articles = res.map(article => ({
      _id: article.objectID.toString(),
      title: article.title,
      author: article.author,
      url: article.url,
      story_url: article.story_url,
      story_title: article.story_title,
      created_at: article.created_at_i
    }))

   const article = articles.map(async article => await this.createArticle(article))
   return Promise.all(article) 
  }

  async createArticle(article: CreateArticleDTO): Promise<Article> {
    const newArticle = await new this.articleModel(article)
    return newArticle.save()
  }

  async deleteArticle(articleId: string): Promise<any> {
    const article = await this.articleModel.findByIdAndRemove(articleId);
    return article;
  }
}
