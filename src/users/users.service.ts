import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {

    }

    create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.isActive = createUserDto.isActive;

        return this.usersRepository.save(user);
    }

    findAll(skip ?: number,
            take ?: number): Promise<User []> {
        return this.usersRepository.find({ skip: skip, take: take });
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOneBy({ id: id });
    }

    update(updateUserDto: UpdateUserDto): Promise<UpdateResult> {
        return this.usersRepository.update(
                { id: updateUserDto.id },
                {
                    isActive: updateUserDto.isActive,
                    lastName: updateUserDto.lastName,
                    firstName: updateUserDto.firstName,
                },
        );
    }

    remove(id: string): Promise<DeleteResult> {
        return this.usersRepository.delete({ id: id });
    }
}
