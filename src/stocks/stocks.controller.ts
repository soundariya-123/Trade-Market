import { Body, Controller, Get, Post } from '@nestjs/common';
import { StocksDTO } from './dto/stocks.dto';
import { StocksService } from './stocks.service';

/**
 * UsersController -- Controllers are responsible for handling incoming requests and returning responses.
 * @author soundariya
 */
@Controller('stocks')
export class StocksController {

    /**
     * @constructor Constructor for Inject StocksService
     * @param stockService  StocksService
     */
    constructor(private stockService: StocksService){}

    /**
      * Create stock
      * @param stockDTO :StocksDTO
      * @returns returns Created stock 
      */
    @Post()
    addStock(@Body() stockDTO: StocksDTO): Promise<string>{
        return this.stockService.addStock(stockDTO)
    }

    /**
     * Liss all stocks
     * @returns StocksDTO[]
     */
    @Get()
    listAllStocks(): Promise<StocksDTO[]>{
        return this.stockService.listAllStocks()
    }
}
