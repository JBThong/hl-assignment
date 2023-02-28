import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Joke extends Model {
    @Column({
        type: DataType.TEXT,
        allowNull: false,
        defaultValue: ""
    })
    content: string;
}