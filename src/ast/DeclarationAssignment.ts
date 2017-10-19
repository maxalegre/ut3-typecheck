import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WTInt } from '../typecheck/WTInt';

/**
  Representación de las asignaciones de valores a variables.
*/
export class DeclarationAssignment implements Stmt {
  id: string;
  type: WhileType;
  exp: Exp;

  constructor(type: WhileType, id: string, exp: Exp) {
    this.id = id;
    this.type = type;
    this.exp = exp;
  }

  toString(): string {
    return `DeclarationAssignment(${this.type.toString()},${this.id},${this.exp.toString})`;
  }

  unparse(): string {
    return `${this.type} ${this.id} = ${this.exp.unparse()};`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    var getState = checkstate.get(this.id);

    if (getState === undefined) {
      if (this.type.getInstance().isCompatible(this.exp[0].checktype(checkstate))) {
        checkstate.set(this.id, this.type.getInstance());
      } else {
        console.log("La variable " + this.id + " no puede ser declarada como " + this.type + " y ser asignada a un " + this.exp[0].checktype(checkstate));
      }
    } else {
      console.log("La variable " + this.id + " ya está declarada como " + getState);
    }
    return checkstate;
  }

}