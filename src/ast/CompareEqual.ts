import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { CheckState } from '../typecheck/CheckState';
import { WhileType } from '../typecheck/WhileType';
import { WTNumeral, WTInt, WTBool } from './AST';

/**
  Representación de las comparaciones por igual.
*/
export class CompareEqual implements Exp {

  lhs: Exp;
  rhs: Exp;

  constructor(lhs: Exp, rhs: Exp) {
    this.lhs = lhs;
    this.rhs = rhs;
  }

  toString(): string {
    return `CompareEqual(${this.lhs.toString()}, ${this.rhs.toString()})`;
  }

  unparse(): string {
    return `(${this.lhs.unparse()} == ${this.rhs.unparse()})`;
  }

  evaluate(state: State): any {
    return undefined;
  }

  checktype(checkstate: CheckState): WhileType {
    var trhs = this.rhs.checktype(checkstate);
    var tlhs = this.lhs.checktype(checkstate);


    if(tlhs === WTNumeral.Instance && (trhs === WTInt.Instance||trhs === WTNumeral.Instance))
      {
        return WTBool.Instance;
      }
    else if (tlhs === WTInt.Instance)
      {
        if (trhs === WTInt.Instance)
          {
            return WTBool.Instance;
          }
        //Y Numeral
        else if(trhs === WTNumeral.Instance)
          {
            return WTBool.Instance
          }
      }
    //Si son booleanos 
    else if (trhs === WTBool.Instance && tlhs === WTBool.Instance ){
      return WTBool.Instance;
    }
    else
      {
        console.log("Guardar Error [No se pueden COMPARAR variables de tipo "+tlhs.toString()+" con "+ trhs.toString()+ "] Y Seguir")                  
      }
  }
}
