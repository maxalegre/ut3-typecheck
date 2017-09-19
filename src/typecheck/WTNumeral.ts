import { WhileType } from "./WhileType";
import { WTInt } from "./WTInt";

export class WTNumeral extends WhileType {
	constructor() {
		super();
	}

	public isCompatible(tipo: WhileType): Boolean {
		if (tipo === this || tipo === WTInt.Instance) {
			return true;
		}
		return false;
	}

	public coerce(tipo: WhileType): WhileType {
		return this;
	}

	public toString(): String {
        return "Numeral";
	}

	public getInstance(): WhileType {
		return this;
	}
}
