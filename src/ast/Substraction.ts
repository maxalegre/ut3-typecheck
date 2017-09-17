import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WTNumeral } from '../typecheck/WTNumeral';
import { WTInt } from '../typecheck/WTInt';
import { WTBool } from '../typecheck/WTBool';

/**
  Representación de restas.
*/
export class Substraction implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Substraction(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} - ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var trhs = this.rhs.checktype(checkstate);
    var tlhs = this.lhs.checktype(checkstate);
    if(tlhs==WTBool.Instance || trhs == WTBool.Instance){
      console.log("no podes operar con buleanos crimen, cual haces?, me guardo el error y sigo")
    }
    else{
      if(trhs === tlhs && tlhs === WTInt.Instance){
        return WTInt.Instance;
      }
      else{
        return WTNumeral.Instance;
      }
    }
    return undefined

  }
}
