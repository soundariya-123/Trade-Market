import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HoldingsService } from './holdings.service';
import { HoldingsDTO } from './dto/holdings.dto';

@ApiTags('holdings')
@Controller('holdings')
export class HoldingsController {
    /**
     * Depandancy 
     * @param HoldingsService FlightsService
     */
     constructor(private holdingsService: HoldingsService) { }

     /**
     * Add Holdings 
     * @param flights holdings
     * @returns 
     */
    @ApiCreatedResponse({ description: 'Holdings created successfully', status: HttpStatus.CREATED })
    @ApiInternalServerErrorResponse({ description: 'Holdings not created(Internal Server) ', status: HttpStatus.INTERNAL_SERVER_ERROR })
    @Post()
    addFlights(@Body() holdings: HoldingsDTO): Promise<HoldingsDTO> {
        return this.holdingsService.addHoldings(holdings);
    }
    /**
     * List Of holdings  
     * @returns List Of Holdings 
     */
     @ApiOkResponse({ description: 'Holdings fetched successfully', status: HttpStatus.OK })
     @ApiNotFoundResponse({ description: 'Holdings Not found', status: HttpStatus.NOT_FOUND })
     @Get()
     getHoldings(): Promise<HoldingsDTO[]> {
         return this.holdingsService.getHoldings();
     }
 


}
