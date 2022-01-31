import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./status.enum";

/**
 * Users entity for create table columns
 * @author soundariya
 */
@Entity()
export class Stocks{

    /**
     * Primary key defines autoIncrement
     * @field id
     */
    @PrimaryGeneratedColumn()
    id:number;

    /**
     * Create stock_name column in stock table
     * @field stock_name
     */
    @Column()
    stock_name:string;

    /**
     * Create stock_price column in stock table
     * @field stock_price
     */
    @Column()
    stock_price:number;

    /**
     * Create status column in stock table
     * @field status
     */
    @Column({type:'enum', enum : Status,default: Status.Active, })
    status:Status;

    /**
     * Create buying_price column in stock table
     * @field buying_price
     */
    @Column()
    buying_price:number;

    /**
     * Create selling_price column in stock table
     * @field selling_price
     */
    @Column()
    selling_price:number;

    /**
     * Create company_name column in stock table
     * @field company_name
     */
    @Column()
    company_name:string;

    /**
     * Create changes column in stock table
     * @field changes
     */
    @Column()
    changes:number;

    /**
     * Create discounts column in stock table
     * @field discounts
     */
    @Column()
    discounts:number;

    // orders:Orders

}