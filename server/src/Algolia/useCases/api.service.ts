import { Injectable, HttpService } from '@nestjs/common';
import { AlgoliaArticle } from '../domain/algolia.interface'

@Injectable()
export class ApiService {
    constructor(private http: HttpService){}

    async getArticules(): Promise<AlgoliaArticle[]> {
        const url = 'http://hn.algolia.com/api/v1/search_by_date?query=nodejs'
        const response = await this.http.get(url).toPromise()

        return response.data.hits
    }
}