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
    return `DeclarationAssignment(${this.type.toString()},${this.id},${this.exp.toString})`;
  }

  unparse(): string {
    return `${this.type} ${this.id} = ${this.exp.unparse()};`;
  }

  evaluate(state: State): State {
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {

    if (checkstate.get(this.id)===undefined)
      {
        console.log(this.exp);
        
        if(this.exp[0].checktype(checkstate) === this.type[0].Instance)
          {
            console.log("llega?");
            checkstate.set(this.id,this.exp[0].checktype(checkstate));
            console.log("si");
            
          }
        else
          {
            console.log("La variable "+this.id+" no puede ser declarada como "+ this.type[0].toString()+ " y ser asignada a un " +
            this.exp.checktype(checkstate));            
          }
      }
    else
      {
        console.log("La variable "+this.id+" ya está declarada como "+ checkstate.get(this.id));
      }
    return checkstate;
  }
}