import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'products',
      synchronize: true,
      logging: false,
      entities: ['dist/entity/**/*.js'],
      migrations: ['dist/migration/**/*.js'],
      subscribers: ['dist/subscriber/**/*.js'],
    }),
    ProductModule,
  ],
})
export class AppModule {}
