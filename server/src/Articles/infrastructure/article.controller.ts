import { 
    Controller,
    Get, 
    Res, 
    HttpStatus, 
    Post, 
    Body, 
    NotFoundException, 
    Delete,
    Param, 
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

  @Delete(":articleId")
    async removeArticle(@Res() res, @Param('articleId') articleId: string) {
        const article = await this.articleSercice.deleteArticle(articleId);
        if (!article) throw new NotFoundException('Article not exists');
        return res.status(HttpStatus.OK).json({
            message: 'article has been deleted',
            article
        })
    }
}

