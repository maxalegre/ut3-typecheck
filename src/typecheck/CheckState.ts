import { WhileType } from './WhileType';

export class CheckState {

  vars: Map<string, WhileType>;
  errors: string[];

  constructor() {
    this.vars = new Map<string, WhileType>();
  }

  toString(): string {
    return `{ ${Array.from(this.vars.entries()).map(([key, value]) => (`${key} = ${value}`)).join("; ")} }`;
  }

  get(id: string): WhileType {
    return this.vars.get(id);
  }

  set(id: string, type: WhileType) {
    this.vars.set(id, type);
  }

<<<<<<< HEAD
  error(message:string)
  {
    this.errors.push(message);
    console.log(message);
  }

  getErrors(): string[]
  {
=======
  error(message: string) {
    console.log(message);
    this.errors.push(message);
  }

  getErrors(): string[] {
>>>>>>> f7347efc114b439f5fca6a69b1fdb23165e9ac0f
    return this.errors;
  }

}
