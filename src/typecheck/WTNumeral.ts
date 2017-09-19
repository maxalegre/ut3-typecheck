import { WhileType } from "./WhileType";
import { WTInt } from "./WTInt";

export class WTNumeral extends WhileType {
	constructor() {
		super();
	}

	public isCompatible(tipo: WhileType): Boolean {
		if (tipo === this || tipo === WTNumeral.Instance) {
			return true;
		}
		return false;
	}

	public isCompatibleAs(tipo: WhileType): WhileType {
		if (tipo === this || tipo === WTNumeral.Instance) {
			return WTNumeral.Instance;
		}
		return null;
	}
	public toString(): String {
        return "Numeral";
	}
	public getInstance(){
		return this;
	}
}
