/**
 * @class Storage
 */
class Storage 
{
    // Unique static instance
    static #storageInstance = null;

    /**
     * Get a unique storage instance
     * @returns {Storage} instance
     */
    static getInstance()
    {
        // If the instance is null
        if(Storage.#storageInstance == null)
        {
            // Create a new unique instance
            Storage.#storageInstance = new Storage();
        }

        return Storage.#storageInstance;
    }

    /**
     * Save JSON into localStorage
     * @param {*} name 
     * @param {*} json 
     */
    saveJson(name, json)
    {
        localStorage.setItem(name, json);
    }

    /**
     * Save an object into the localStorage
     * @param {*} name 
     * @param {*} obj 
     */
    saveObject(name, obj)
    {
        const data = JSON.stringify(obj);

        localStorage.setItem(name, data);
    }

    /**
     * Retrieve element as text
     * @param {*} name 
     * @returns 
     */
    retrieveAsText(name)
    {
        return localStorage.getItem(name);
    }

    /**
     * Retrieve element as JSON
     * @param {*} name 
     * @returns 
     */
    retrieveAsJson(name)
    {
        return JSON.parse(localStorage.getItem(name) || "[]");
    }

    /**
     * Retrieve a unique object
     * @param {*} name 
     * @returns 
     */
    retrieveUniqueValue(name)
    {
        return localStorage.getItem(name);
    }

    /**
     * Remove an object from the localStorage
     * @param {*} name 
     */
    remove(name)
    {
        localStorage.removeItem(name);
    }
}