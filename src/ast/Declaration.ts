import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

/**
  Representación de las declaraciones de valores a variables.
*/
export class Declaration implements Stmt {
  id: string;
  type: WhileType;

  constructor(type: WhileType, id: string) {
    this.id = id;
    this.type = type;
  }

  toString(): string {
    return `Declaration(${this.id}, ${this.type.toString()})`;
  }

  unparse(): string {
    return `${this.type.toString()} ${this.id}`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    var getState = checkstate.get(this.id);
    console.log(this.type);

    if (getState === undefined) {
      checkstate.set(this.id, this.type.getInstance());
    } else {
      console.log("La variable " + this.id + " ya está declarada como " + getState);
    }

    return checkstate;
  }

}