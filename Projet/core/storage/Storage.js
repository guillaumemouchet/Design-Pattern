class Storage 
{
    static #storageInstance = null;
    #file = null;

    static getInstance()
    {
        if(Storage.#storageInstance == null)
        {
            Storage.#storageInstance = new Storage();
        }

        return Storage.#storageInstance;
    }

    readJsonFile(file)
    {
        return loadJSON(file);
    }
}