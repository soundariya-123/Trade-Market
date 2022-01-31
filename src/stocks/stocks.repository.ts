import { Entity, EntityRepository, Repository } from "typeorm";
import { Stocks } from "./stocks.entity";

/**
 * Repositories can be obtained from the database connection
 * @author soundariya
 */
@EntityRepository(Stocks)
export class StockRepository extends Repository<Stocks>{}