import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class page {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    unsigned: true, 
  })
  _id: number;

  @Column({
    type: 'text',
    collation: 'utf8_unicode_ci',
    nullable: false,
  })
  url: string;

  @Column({
    type: 'text',
    collation: 'utf8_unicode_ci',
    nullable: true,
    default: null
  })
  GET_param: Array<string> | null;

  @Column({
    type: 'text',
    collation: 'utf8_unicode_ci',
    nullable: true,
    default: null
  })
  content: string;

  constructor(param: page = {} as page) {
    const {
      _id,
      url,
      GET_param,
      content
    } = param;

    this._id = _id;
    this.url = url;
    this.GET_param = GET_param;
    this.content = content;
  }

  public getContent(): string {
    return this.content;
  }

}
