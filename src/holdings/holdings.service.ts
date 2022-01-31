import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { HoldingsRepository } from './holdings.repository';
import { HoldingsDTO } from './dto/holdings.dto';
/**
 * Holdings Services
 * @class HoldingsService
 * @author Prakash
 */
@Injectable()
export class HoldingsService {

    /**
     * Logger 
     */
    logger = new Logger(HoldingsService.name)

    /**
     * Depandancy Injection 
     * @param holdingsRepo HoldingsRepository
     */
    constructor(private holdingsRepo: HoldingsRepository) { }

    /**
     * 
     * @param holdings HoldingsDTO
     * @returns flight added Succefully with id
     */
    async addHoldings(holdings: HoldingsDTO): Promise<HoldingsDTO> {
        let response: HoldingsDTO;
        try {
            response = await this.holdingsRepo.save(holdings);
            this.logger.log(`flight added Succefully with id: ${response}`)

        } catch (err) {
            this.logger.error(err.message);
            throw new InternalServerErrorException(err.message);
        }
        return response;
    }

    /**
    * Get Holdings 
    * @returns Able to fetch list of Holdings  
    */
    async getHoldings(): Promise<HoldingsDTO[]> {
        try {
            let response = await this.holdingsRepo.find();
            if (response.length > 0) {
                this.logger.log(`Able to fetch list of ${response.length} Holdings`);
                return response;
            } else {
                const message = 'Holdings not found ';
                this.logger.warn(message);
                throw new NotFoundException(message);

            }
        } catch (error) {
            this.logger.error(error.message)
            throw new InternalServerErrorException(error.message)
        }

    }

}
