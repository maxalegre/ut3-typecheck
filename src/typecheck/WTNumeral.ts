import { WhileType } from "./WhileType";
import { WTInt } from "./WTInt";

export class WTNumeral extends WhileType {
	constructor() {
		super();
	}

	public isCompatible(tipo: WhileType): Boolean {
<<<<<<< HEAD
		if (tipo == this||tipo===WTInt.Instance) {
=======
		if (tipo === this || tipo === WTNumeral.Instance) {
>>>>>>> da17cafd583a436324c1465ecd63fd4b6f34f5a2
			return true;
		}
		return false;
	}
	public toString(): String {
        return "WTNumeral";
	}
	public getInstance(){
		return this;
	}
}
