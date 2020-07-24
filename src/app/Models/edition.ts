export class Edition {
  public year: number;
  public text: string;
  public pictures: any[];
  public mainImage: any;

  constructor(year: number, text: string, pictures: any[], mainpicutre: any) {
    this.year = year;
    this.text = text;
    this.pictures = pictures;
    this.mainImage = mainpicutre;
  }
}


