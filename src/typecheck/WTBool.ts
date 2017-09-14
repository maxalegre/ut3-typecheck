import { WhileType } from "./WhileType";

export class WTBool extends WhileType {
	constructor() {
		super();
	}

	public isCompatible(tipo: WhileType): Boolean {
		if (tipo.getInstance() === WTBool.instance) {
			return true;
		}
		return false;
	}
}