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
      console.log("no estaba definido asi que lo defino");
    }
    else{
      console.log("esta declarado, chequeo tipo");
      console.log("Es de tipo:"+this.exp[0].checktype(checkstate));
      if(checkstate.get(this.id).isCompatible(this.exp[0].checktype(checkstate)))
      {
        if(this.exp[0].checktype(checkstate)===WTNumeral.Instance)
          {
            console.log("entro aquiqui")
            checkstate.set(this.id,new WTNumeral());
          }
        console.log("Listo");
      }
      else{
        console.log("No son compatibles");
      }
    }
    console.log(checkstate.get(this.id));
    return checkstate;
  }
}
