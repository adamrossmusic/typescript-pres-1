/* Class modifiers*/

class AccessModifiersClass {
  private userLocation: string = "Budapest";
  public score: number;
  public rank: string;
  protected registrationDate: any = new Date(2017, 1, 1);
  readonly id: number = 2515;
  static isPublicProfile : boolean = true;

  constructor(score: number) {
    this.score = score;

    this.setUserRank();
  }

  setUserRank = function () {
    if(this.score > 100) {
      this.rank = "rookie"
    } else if(this.score > 1000) {
      this.rank = "pilot"
    } else {
      this.rank = "chief"
    }
  }

}

let accessModifiersClass = new AccessModifiersClass(1004);

const userRank = accessModifiersClass.rank;

console.log(userRank);