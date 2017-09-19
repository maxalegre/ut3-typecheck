import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WTNumeral, WTInt } from './AST';

/**
  Representación de las comparaciones por menor o igual.
*/
export class CompareLess implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareLess(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} < ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var trhs = this.rhs.checktype(checkstate);
    var tlhs = this.lhs.checktype(checkstate);

    //Si es Numeral y (Numeral o Int)
    if (tlhs === WTNumeral.Instance && (trhs === WTInt.Instance || trhs === WTNumeral.Instance)) {
      return WTNumeral.Instance;
    }
    //Si es Int
    else if (tlhs === WTInt.Instance) {
      //Y Int
      if (trhs === WTInt.Instance) {
        return WTInt.Instance;
      }
      //Y Numeral
      else if (trhs === WTNumeral.Instance) {
        return WTNumeral.Instance
      }
    }
    //Si no es Numeral Ni Int
    else {
      console.log("Guardar Error [No se pueden COMPARAR > variables de tipo " + tlhs.toString() + " con " + trhs.toString() + "] Y Seguir")
    }
  }
}

