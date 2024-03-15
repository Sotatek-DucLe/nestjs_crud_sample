import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    id ?: string;

    constructor(id: string) {
        super();
        this.id = id;
    }
}
