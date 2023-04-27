import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entity/product.entity';
import { Repository } from 'typeorm';

@Controller('product')
export class ProductController {
  constructor(
    @InjectRepository(ProductEntity)
    protected readonly entitiesRepository: Repository<ProductEntity>,
  ) {
    this.fillDB();
  }

  fillDB() {
    this.entitiesRepository.clear();
    this.entitiesRepository.save(
      this.entitiesRepository.create({ title: 'Сыр', price: 125 }),
    );
    this.entitiesRepository.save(
      this.entitiesRepository.create({ title: 'Вино', price: 300 }),
    );
    this.entitiesRepository.save(
      this.entitiesRepository.create({ title: 'Кино', price: 1220 }),
    );
    this.entitiesRepository.save(
      this.entitiesRepository.create({ title: 'Домино', price: 420 }),
    );
    this.entitiesRepository.save(
      this.entitiesRepository.create({ title: 'Мимино', price: 580 }),
    );
  }

  @Get()
  async getAll(): Promise<ProductEntity[]> {
    return this.entitiesRepository.find();
  }
}
