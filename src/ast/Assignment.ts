import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WTNumeral } from '../typecheck/WTNumeral';

/**
  Representación de las asignaciones de valores a variables.
*/
export class Assignment implements Stmt {

  id: string;
  exp: Exp;

  constructor(id: string, exp: Exp) {
    this.id = id;
    this.exp = exp;
  }

  toString(): string {
    return `Assignment(${this.id}, ${this.exp.toString()})`;
  }

  unparse(): string {
    return `${this.id} = ${this.exp.unparse()}`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    if(checkstate.get(this.id)===undefined){
      console.log(this.exp);
      checkstate.set(this.id,this.exp[0].checktype(checkstate));
    }
    else{
      if(checkstate.get(this.id).isCompatible(this.exp[0].checktype(checkstate)))
      {
      }
      else{
        console.log("No son compatibles, guardo error y sigo de largo");
      }
    }
    console.log(checkstate.get(this.id));
    return checkstate;
  }
}
