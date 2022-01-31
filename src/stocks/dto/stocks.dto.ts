import { IsNotEmpty } from "class-validator";
import { Status } from "../status.enum";


/**
 * DTO (Data Transfer Object) for transfer a data from HTTP
 * @author soundariya
 */
export class StocksDTO{

    /**
     * Id is for find the number of the users
     * @field id
     */
    id:number;

    /**
     * stock_name column for insert stock_name into the stock table
     * @field stock_name
     * @throws stock_name column not be empty
     */
    @IsNotEmpty({message: 'stock_name should not be empty'})
    stock_name:string;

    /**
     * stock_price column for insert stock_price into the stock table
     * @field stock_price
     * @throws stock_price column not be empty
     */
    @IsNotEmpty({message: 'stock_price should not be empty'})
    stock_price:number;

    /**
     * status column for insert status into the stock table
     * @field status
     * @throws status column not be empty
     */
    @IsNotEmpty({message: 'status should not be empty'})
    status:Status;

    /**
     * buying_price column for insert buying_price into the stock table
     * @field buying_price
     * @throws buying_price column not be empty
     */
    @IsNotEmpty({message: 'buying_price should not be empty'})
    buying_price:number;

    /**
     * selling_price column for insert selling_price into the stock table
     * @field selling_price
     * @throws selling_price column not be empty
     */
    @IsNotEmpty({message: 'selling_price should not be empty'})
    selling_price:number;

    /**
     * company_name column for insert company_name into the stock table
     * @field company_name
     * @throws company_name column not be empty
     */
    @IsNotEmpty({message: 'company_name should not be empty'})
    company_name:string;

    /**
     * changes column for insert changes into the stock table
     * @field changes
     * @throws changes column not be empty
     */
    @IsNotEmpty({message: 'changes should not be empty'})
    changes:number;

    /**
     * discounts column for insert discounts into the stock table
     * @field discounts
     * @throws discounts column not be empty
     */
    @IsNotEmpty({message: 'discounts should not be empty'})
    discounts:number; 
}