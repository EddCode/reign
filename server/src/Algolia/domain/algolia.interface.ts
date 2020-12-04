export interface AlgoliaArticle {
  readonly objectID: BigInteger;
  readonly title: string;
  readonly story_title: string;
  readonly author: string;
  readonly url: string;
  readonly story_url: string;
  readonly created_at_i: Date;
}