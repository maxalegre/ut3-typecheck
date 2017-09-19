import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WTBool } from './AST';

/**
  Representación de conjunciones booleanas (AND).
*/
export class Disjunction implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `Disjunction(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} || ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var trhs = this.rhs.checktype(checkstate);
    var tlhs = this.lhs.checktype(checkstate);
    if (trhs == WTBool.Instance && tlhs == WTBool.Instance) {
      return WTBool.Instance;
    }
    else {
      console.log("Guardar Error [No se pueden & variables de tipo " + tlhs.toString() + " con " + trhs.toString() + "] Y Seguir")
    }

  }
}

