import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'admin',
            database: 'nestjs',
            entities: [__dirname + '/../**/*.entity.js'],
            synchronize: true,
        }),
        UsersModule,
    ],
    controllers: [],
    providers: [AppService],
})
export class AppModule {
}
