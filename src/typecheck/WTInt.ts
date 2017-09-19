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

	public isCompatibleAs(tipo: WhileType): WhileType {
		if (tipo === this) {
			return WTInt.Instance;
		}
		else if (tipo === WTNumeral.Instance)
		{
			return WTNumeral.Instance;			
		}
		return null;
	}
	public toString(): String {
        return "int";
	}
	
}