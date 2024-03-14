import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('students')
export class StudentsController {
    constructor(private configService: ConfigService) {}
    @Get('test')
    loadEnv() : any {
        return this.configService.get<string>('NAME');
    }

}
