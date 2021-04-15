import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Page {

  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    unsigned: true, 
  })
  _id: number;
  @Column({
    type: 'varchar',
    length: 256,
    collation: 'utf8_unicode_ci',
    nullable: false
  })
  URL: string
  @Column({
    type: 'varchar', 
    length: 5000, 
    collation: 'utf8_unicode_ci', 
    nullable: true
  })
  DOM: string

  constructor(param: Page = {} as Page){
    const {
      _id,
      URL, //www.google.com/hi
      DOM
      //site, //www.google.com
      //domain, //google.com
      //uri,  //hi
    } = param;

    this._id = _id;
    this.URL = URL;
    this.DOM = DOM;
    //this.site = site;
    //this.domain = domain;
    //this.uri = uri;
  }

  public async getDOM(): Promise<string> {
    return this.DOM;
  }

}
