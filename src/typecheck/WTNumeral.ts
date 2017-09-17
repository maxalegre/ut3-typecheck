import { WhileType } from "./WhileType";
import { WTInt } from "./WTInt";

export class WTNumeral extends WhileType {
	constructor() {
		super();
	}

	/*public isCompatible(tipo: WhileType): Boolean {
		if (tipo.getInstance() === WTInt.instance || tipo.getInstance() == WTNumeral.instance) {
			return true;
		}
		return false;
	}*/
	public toString(): String {
        return "WTNumeral";
	}
	public getInstance(){
		return this;
	}
}
