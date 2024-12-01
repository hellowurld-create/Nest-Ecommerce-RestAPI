import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductsModule, DatabaseModule, UserModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService, DatabaseService],
})
export class AppModule {}
