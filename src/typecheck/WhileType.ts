export class WhileType {
    private static _instance: WhileType;
    public constructor() {
        //...
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    public getInstance(): WhileType {
        return null;
    }

    public isCompatible(tipo: WhileType): Boolean {
        return false;
    }

    public toString(): String {
        return "";
    }

    public coerce(tipo: WhileType): WhileType {
        return null;
    }
}