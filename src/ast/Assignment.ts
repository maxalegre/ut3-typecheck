import { Exp, Stmt } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';

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
    console.log("entro a evaluate");
    return undefined;
  }

  checktype(checkstate: CheckState): CheckState {
    console.log("entro a CheckState");
    console.log("Id:"+this.id);
    console.log("Exp:"+this.exp);
    console.log("checkState.toString():"+ checkstate.toString());
    console.log("Checktype:"+checkstate.get(this.id));
    if(checkstate.get(this.id)===undefined){
      console.log("es undefined, lo vamos a definir");
      //console.log(checkstate.set(this.id));

    }
    console.log(checkstate.get(this.id));
    return undefined;
  }
}
