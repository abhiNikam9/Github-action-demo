import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-service',
      port: 3306,
      username:  'root',
      password:'password',
      database: 'First_project',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
})

export class AppModule {
}

