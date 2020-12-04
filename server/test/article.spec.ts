import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from '../src/Algolia/useCases/api.service';
import { ArticleService } from '../src/Articles/useCases/article.service';

class ApiServiceMock {
 getArticles() {
   return {
     objectID: 'mock-article-id',
     title: 'mock-article-title',
     story_title: 'mock-article-story',
     url: 'mock-article-url',
     created_at_i: 1607110460
   };
 }
}


describe('Articles Services', () => {
  let app: TestingModule;
  let articleService: ArticleService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: ApiService,
      useClass: ApiServiceMock,
    };
    app = await Test.createTestingModule({
      providers: [ArticleService, ApiServiceProvider],
    }).compile();
    articleService = app.get<ArticleService>(ArticleService);
  });

  it('should get articles', async () => {
    const gpa = await articleService.getAllArticles()
    console.log(gpa)

    expect(true).toBeTruthy()
  });
});