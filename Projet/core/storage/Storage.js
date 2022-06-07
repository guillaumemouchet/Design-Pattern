class Storage 
{
    static #storageInstance = null;

    static getInstance()
    {
        if(Storage.#storageInstance == null)
        {
            Storage.#storageInstance = new Storage();
        }

        return Storage.#storageInstance;
    }

    saveJson(name, json)
    {
        localStorage.setItem(name, json);
    }

    saveObject(name, obj)
    {
        const data = JSON.stringify(obj);

        localStorage.setItem(name, data);
    }

    retrieveAsText(name)
    {
        return localStorage.getItem(name);
    }

    retrieveAsJson(name)
    {
        return JSON.parse(localStorage.getItem(name) || "[]");
    }

    remove(name)
    {
        localStorage.removeItem(name);
    }
}