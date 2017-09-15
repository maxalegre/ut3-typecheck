import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

/**
  Representación de las asignaciones de valores a variables.
*/
export class Declaration implements Stmt {

  id: string;
  type: WhileType;

  constructor(id: string, type: WhileType) {
    this.id = id;
    this.type = type;
  }

  toString(): string {
    return `Declaration(${this.id}, ${this.type.toString()})`;
  }

  unparse(): string {
    return `${this.type.toS()} ${this.id}`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    return undefined;
  }
}