import { WhileType } from "./WhileType";

export class WTBool extends WhileType {
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
        return "boolean";
	}
	
	public isCompatibleAs(tipo: WhileType): WhileType {
		if (tipo === this) {
			return WTBool.Instance;
		}
		return null;
	}
}