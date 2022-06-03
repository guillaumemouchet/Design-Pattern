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

    readTextFile(file, callback)
    {
        // Based on : https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
        if(this.#file == null) 
        {
            this.#file = new XMLHttpRequest();
            this.#file.overrideMimeType("application/json");
        }

        this.#file.open("GET", file, true);

        this.#file.onreadystatechange = function() {
            if (this.#file.readyState === 4 && this.#file.status == "200") {
                callback(this.#file.responseText);
            }
        }

        this.#file.send(null);
    }
}