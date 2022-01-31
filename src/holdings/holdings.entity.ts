import { Users } from "../users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

/**
 * Holding DTO
 * @class Holding
 * @author Prakash
 */
@Entity()
export class Holdings {

    /**
    * Id column created in Holding table
    * @field id
    * @type number
    */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * Stock id column created in Holding table
     * @field stock_id
     * @type Stocks
     */
    // @ManyToOne(()=>Stocks, stocks=>stocks.holdings)
    // stocks:Stocks;

    /**
     * Create users column in holding table
     * @field users
     * @type Users
     */
    @OneToMany(() => Users, users => users.holdings)
    users: Users;

    // @ManyToOne(() => Quote, quote=>quote.holding )
    // quote:Quote;
    /**
     * Create  Price_Buy  column in holdings table
     * @field num_of_shares
     * @type number
     */
    @Column()
    num_of_shares: number;


    /**
     * Create  Price_Buy  column in holdings table 
     * @field price_buy
     * @type number
     */
    @Column()
    price_buy: number;

    /**
     * Create price_sell column in holdings table
     * @field price_sell
     * @type number
     */
    @Column()
    price_sell: number;

    /**
     * Create date_of_buying  column in holdings table
     * @field date_of_buying
     * @type Date
     */
    @Column()
    date_of_buying: Date;

    /**
     * Create date_of_sale column in holdings table
     * @field date_of_sale
     * @type Date
     */
    @Column()
    date_of_sale: Date;
}
