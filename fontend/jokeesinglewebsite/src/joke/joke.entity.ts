import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Joke extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: ""
    })
    content: string;
}