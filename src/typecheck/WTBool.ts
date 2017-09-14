import WhileType from "./WhileType.ts"
export class WTBool extends WhileType{
	constructor(){
		super();
	}
	public isCompatible(tipo:WhileType){
		if(tipo.getinstance() === WTBool) {
			return true;
		}
	}
}