import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HoldingsController } from './holdings.controller';
import { HoldingsService } from './holdings.service';
import { Holdings } from './holdings.entity';
import { HoldingsRepository } from './holdings.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Holdings,HoldingsRepository])],
  controllers: [HoldingsController],
  providers: [HoldingsService]
})
export class HoldingsModule {}
