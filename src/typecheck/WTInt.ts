import { WhileType } from "./WhileType";
import { WTNumeral } from "./WTNumeral";

export class WTInt extends WhileType {
	constructor() {
		super();
	}

	public isCompatible(tipo: WhileType): Boolean {
		if (tipo === this||tipo===WTNumeral.Instance) {
			console.log(tipo.toString);
			
			return true;
		}
		return false;
	}
	public toString(): String {
        return "WTInt";
	}
	
}