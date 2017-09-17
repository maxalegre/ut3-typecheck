import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WTNumeral } from '../typecheck/WTNumeral';
import { WTBool } from '../typecheck/WTBool';
import { WTInt } from '../typecheck/WTInt';

/**
  Representación de sumas.
*/
export class Addition implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Addition(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} + ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var trhs = this.rhs.checktype(checkstate);
    var tlhs = this.lhs.checktype(checkstate);
    if(tlhs==WTBool.Instance || trhs == WTBool.Instance){
      console.log("no podes sumar buleanos crimen, cual haces?, me guardo el error y sigo")
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
