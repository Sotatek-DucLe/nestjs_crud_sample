import { BeforeInsert, Column, Entity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {

    @Column({ type: 'uuid', primary: true })
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    @BeforeInsert()
    generateId() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}