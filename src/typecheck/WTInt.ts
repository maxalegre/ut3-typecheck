import WhileType from "./WhileType.ts"
import WTNumeral from "./WTNumeral.ts"
export class WTInt extends WhileType{
	constructor(){
		super();

	}
	public isCompatible(tipo:WhileType){
		if(tipo.getinstance() === WTInt ) {
			return true;
		}
	}
}