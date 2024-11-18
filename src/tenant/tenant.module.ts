import { Global, Module } from '@nestjs/common';
import { TenantService } from './tenant/tenant.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from 'src/account/entities/account.entity';

@Global()
@Module({
  imports: [SequelizeModule.forFeature([Account])],
  providers: [TenantService],
  exports: [TenantService],
})
export class TenantModule {}
