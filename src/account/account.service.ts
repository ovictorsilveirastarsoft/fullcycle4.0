import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account)
    private accountModel: typeof Account) {}
  create(createAccountDto: CreateAccountDto){
    return this.accountModel.create(createAccountDto as Omit<Account, 'id'>);
  }
  
  findAll() {
    return this.accountModel.findAll();;
  }

  findOne(id: string) {
    return this.accountModel.findByPk(id,{
      rejectOnEmpty: true
    });
  }

}
