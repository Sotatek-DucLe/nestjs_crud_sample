import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        StudentsModule,
        TeachersModule,
    ],
    controllers: [],
    providers: [AppService],
})
export class AppModule {
}
