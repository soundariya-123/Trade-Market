import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { StocksDTO } from './dto/stocks.dto';
import { StockRepository } from './stocks.repository';

/**
 *  StocksService -- to write a business logic
 *  @author soundariya
 */
@Injectable()
export class StocksService {
    /**
     * Logger instance
     */
    logger = new Logger(StocksService.name);

    /**
     * dependency injection 
     * @param stockRepo StockRepository
     */
    constructor(private stockRepo: StockRepository) {}

    /**
     * Add stock into the stocks table 
     * @param stockDTO StocksDTO
     */
    async addStock(stockDTO: StocksDTO): Promise<string> {
        try{
            let response = await this.stockRepo.save(stockDTO) 
            if(response){
                const msg = 'stock added successfully';
                this.logger.log(msg)
                return msg;
            }
        }catch(err){
            this.logger.error(err.message);
            throw new HttpException('Internal server eror', HttpStatus.INTERNAL_SERVER_ERROR)
        }
        throw new Error('Method not implemented.');
    }

    /**
     * Fetched all stocks
     * @returns StocksDTO[] 
     */
    async listAllStocks(): Promise<StocksDTO[]> {
        try{
            let response = await this.stockRepo.find() 
            if(response.length > 0){
                this.logger.log('stock fetched successfully')
                return response;
            }
        }catch(err) {
            this.logger.error(err.message);
            throw new HttpException('Internal server eror', HttpStatus.INTERNAL_SERVER_ERROR)
        }
     
    }
}
