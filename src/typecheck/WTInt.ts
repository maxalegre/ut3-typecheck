import { WhileType } from "./WhileType";

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
	public toString(): String {
        return "WTInt";
	}
	
}