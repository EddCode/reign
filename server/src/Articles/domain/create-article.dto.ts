export class CreateArticleDTO {
  readonly _id: string;
  readonly title: string;
  readonly story_title: string;
  readonly author: string;
  readonly url: string;
  readonly story_url: string;
  readonly created_at: Date;
}
