import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username:  'root',
      password:'Root@123',
      database: 'first_project',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
})

export class AppModule {
}

