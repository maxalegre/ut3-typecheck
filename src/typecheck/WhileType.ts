export class WhileType {
    private static _instance: WhileType;
    private constructor()
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

}