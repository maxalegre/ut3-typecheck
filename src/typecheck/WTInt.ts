import { WhileType } from "./WhileType";
import { WTNumeral } from "./WTNumeral";

export class WTInt extends WhileType {
	constructor() {
		super();
	}

	public isCompatible(tipo: WhileType): Boolean {
		if (tipo === this) {
			return true;
		}
		return false;
	}

	public getInstance(): WhileType {
		return this;
	}

	public coerce(tipo: WhileType): WhileType {
		return tipo; 
	}

	public toString(): String {
		return "int";
	}

}