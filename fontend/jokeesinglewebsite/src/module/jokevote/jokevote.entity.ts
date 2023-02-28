import { Table, Column, Model, DataType, ForeignKey, BelongsTo  } from 'sequelize-typescript';
import { Joke } from '../joke/joke.entity'

@Table
export class JokeVote extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
    vote: number;

    // @ForeignKey(() => Joke)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
    jokeId: number;

    // @BelongsTo(() => Joke)
    // joke: Joke  

}