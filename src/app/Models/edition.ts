export class Edition {
  public year: number;
  public text: string;
  public pictures: any[];

  constructor(year: number, text: string, pictures: any[]) {
    this.year = year;
    this.text = text;
    this.pictures = pictures;
  }
}


