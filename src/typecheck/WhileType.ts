export class WhileType {
    private static _instance: WhileType;
    public constructor()
    {
        //...
    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }
    public isCompatible(tipo: WhileType): Boolean {
        return false;
    }
    public toString(): String {
        return "";
    }

    public isCompatibleAs(tipo: WhileType): WhileType {
        return null;
	}
}