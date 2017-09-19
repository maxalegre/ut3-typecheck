import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WTBool } from './AST';

/**
  Representación de las negaciones de expresiones booleanas.
*/
export class Negation implements Exp {

  exp: Exp;

  constructor(exp: Exp) {
    this.exp = exp;
  }

  toString(): string {
    return `Negation(${this.exp.toString()})`;
  }

  unparse(): string {
    return `(!${this.exp.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var trhs = this.exp.checktype(checkstate);
    if (trhs == WTBool.Instance) {
      return WTBool.Instance;
    }
    else {
      console.log("Guardar Error [No se pueden Negar variables de tipo " + trhs.toString() + "] Y Seguir")
    }
  }
}
