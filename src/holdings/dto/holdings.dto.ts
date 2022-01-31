import { IsNotEmpty } from 'class-validator';
import { Users } from 'src/users/users.entity';

/**
 * Holdings DTO File
 * @class HoldingsDTO
 * @author Prakash Pawar
 */
export class HoldingsDTO{
    /**
    * Id field
    * @field id
    * @type number
    */
     id: number;
 
     /**
      * Stock field
      * @field stock_id
      * @type Stocks
      */
     // stocks:Stocks;
 
     /**
      * User field
      * @field users
      * @type Users
      */
     @IsNotEmpty()
     users: Users;
 
     /**
      * Num_of_shares field  
      * @field num_of_shares
      * @type number
      */
     @IsNotEmpty()
     num_of_shares: number;
 
 
     /**
      * Price_Buy 
      * @field price_buy
      * @type number
      */
     @IsNotEmpty()
     price_buy: number;
 
     /**
      * Price_sell field
      * @field price_sell
      * @type number
      */
     @IsNotEmpty()
     price_sell: number;
 
     /**
      * Date_of_buying field
      * @field date_of_buying
      * @type Date
      */
     @IsNotEmpty()
     date_of_buying: Date;
 
     /**
      * Date_of_sale field
      * @field date_of_sale
      * @type Date
      */
     @IsNotEmpty()
     date_of_sale: Date;
 }
 

 