import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WTInt } from '../typecheck/WTInt';

/**
  Representación de constantes numéricas o numerales.
*/
export class Int implements Exp {

  value: Int;

  constructor(value: Int) {
    this.value = value;
  }

  toString(): string {
    return `Int(${this.value})`;
  }

  unparse(): string {
    return `${this.value}`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    return WTInt.Instance;
  }
  
}
