
export class Helper{

  isHideDetailMvtStk:boolean = false;

  constructor(){}

  hideDetailMvtStk(){
    this.isHideDetailMvtStk = !(this.isHideDetailMvtStk);
    console.log(this.isHideDetailMvtStk);

  }
}
