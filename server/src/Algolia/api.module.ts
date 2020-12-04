
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/common'
import { ApiService  } from '../Algolia/useCases/api.service';

@Module({
  imports: [HttpModule],
  providers: [ApiService],
})

export class ApiModule {}