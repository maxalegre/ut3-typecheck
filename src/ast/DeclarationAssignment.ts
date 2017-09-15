import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

/**
  Representación de las asignaciones de valores a variables.
*/
export class DeclarationAssignment implements Stmt {

  id: string;
  type: WhileType;
  exp: Exp

  constructor(type: WhileType, id: string,  exp: Exp) {
    this.id = id;
    this.type = type;
    this.exp = exp;
  }

  toString(): string {
    return `Declaration(${this.type.toString()},${this.id},${this.exp.toString})`;
  }

  unparse(): string {
    return `${this.type.toString()} ${this.id} = ${this.exp.toString};`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    return undefined;
  }
}