/**
 * @class Model
 *
 * Manages the data of the application.
 */
 class Model
 {
    static fetchAll(name, classname)
    {
        const storage = localStorage;

        const jsonData = storage.getItem(name);

        const dataObject = [];

        JSON.parse(jsonData).forEach(element => {
            dataObject.push(new classname(element));
        });

        return dataObject;
    }

    static save(obj, name)
    {
        const storage = localStorage;

        const data = JSON.stringify(obj);

        // console.log(data); // DEBUG

        storage.setItem(name, data);

        // console.log(JSON.parse(storage.getItem(name))); // DEBUG
    }

    static remove(name)
    {
        localStorage.setItem(name, null);
    }

    static initialize()
    {
        // Generate
        const data = [
            new Ingredient({'name' : 'Bacon', 'price' : 1.9}),
            new Ingredient({'name' : 'Laitue', 'price' :  0.4}),
            new Ingredient({'name' : 'Fromage', 'price' :  0.8}),
            new Ingredient({'name' : 'Poulet grillé', 'price' : 2.2}),
            new Ingredient({'name' : 'Frites', 'price' : 1.4}),
        ];

        Model.save(data, 'ingredients');
    }
}  