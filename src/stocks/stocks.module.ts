import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { Stocks } from './stocks.entity';
import { StockRepository } from './stocks.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Stocks, StockRepository]) ],
    controllers: [ StocksController],
    providers: [ StocksService],

})
export class StocksModule {}
