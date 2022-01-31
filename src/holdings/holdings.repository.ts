import { EntityRepository, Repository } from 'typeorm';
import { Holdings } from './holdings.entity';
@EntityRepository(Holdings)
export class HoldingsRepository extends Repository<Holdings>{
}