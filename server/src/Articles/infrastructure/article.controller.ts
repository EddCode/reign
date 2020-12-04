import { 
    Controller,
    Get, 
    Res, 
    HttpStatus, 
    Post, 
    Body, 
    Query, 
    NotFoundException, 
    Delete, 
} from '@nestjs/common';
import { ArticleService } from '../useCases/article.service';
import { CreateArticleDTO } from '../domain/create-article.dto'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleSercice: ArticleService) {}

  @Get()
  async getArticles(@Res() res) {
    const articles = await this.articleSercice.getAllArticles();
    return res.status(HttpStatus.OK).json(articles)
  }

  @Post()
  async createArticle(@Res() res, @Body() article: CreateArticleDTO ) {
      const addedArticle = await this.articleSercice.createArticle(article)
      return res.status(HttpStatus.OK).json({
          message: 'Article has been created successfully',
          article: addedArticle
      })
  }

  @Delete()
    async removeArticle(@Res() res, @Query('articleId') customerID: string) {
        const article = await this.articleSercice.deleteArticle(customerID);
        if (!article) throw new NotFoundException('Customer does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'article has been deleted',
            article
        })
    }
}

