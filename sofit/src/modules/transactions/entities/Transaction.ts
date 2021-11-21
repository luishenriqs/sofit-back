import { v4 as uuidv4 } from 'uuid';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity("transaction")
class Transaction {
    @PrimaryColumn()
    id?: string;

    @Column()
    category!: string;

    @Column()
    value!: number;

    @Column()
    type!: string;

    @Column()
    description!: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at!: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Transaction }
