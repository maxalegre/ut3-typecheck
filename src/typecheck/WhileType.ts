export class WhileType {
    private static isCreating: Boolean = false;
    static instance: WhileType = null;

    constructor () {
        if (!WhileType.isCreating) throw new Error("This is a real singleton. Get an instance via WhileType.getInsance();");
    }

    public getInstance(): WhileType {
        if (WhileType.instance === null) {
            WhileType.isCreating = true;
            WhileType.instance = new WhileType();
            WhileType.isCreating = false;
        }

        return WhileType.instance;
    }

    public isCompatible(tipo: WhileType): Boolean {
        return false;
    }
}