/**
 * @class Model
 *
 * Manages the data of the application.
 */
 class Model
 {
    static fetchAll(name, classname)
    {
        const jsonData = Storage.getInstance().retrieveAsJson(name);

        const dataObject = [];

        jsonData.forEach(element => {
            dataObject.push(new classname(element));
        });

        return dataObject;
    }

    static fetch(name, classname)
    {
        const jsonData = Storage.getInstance().retrieveAsJson(name);

        return new classname(jsonData);
    }

    static save(obj, name)
    {
        Storage.getInstance().saveObject(name, obj);
    }

    static remove(name)
    {
        Storage.getInstance().remove(name);
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