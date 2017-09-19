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

  error(message:string)
  {
    this.errors.push(message);
    console.log(message);
  }

  getErrors(): string[]
  {
    return this.errors;
  }

}
