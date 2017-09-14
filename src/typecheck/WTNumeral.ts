import WhileType from "./WhileType.ts"
import WTInt from "./NTInt.ts"
export class WTNumeral extends WhileType{
	constructor(){
		super();
	}
	public isCompatible(tipo:WhileType){
		var tipo = tipo.getinstance();
		if(tipo.getinstance() === WTInt || tipo.getinstance() == WTNumeral) {
			return true;
		}
	}
}