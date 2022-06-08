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

    static update(params, name)
    {
        let jsonData = Storage.getInstance().retrieveAsJson(name);

        params.map(propertyName, value => jsonData[propertyName] = value);

        Storage.getInstance().save(jsonData);
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
            new Ingredient({'name' : 'Olive', 'price' : 1.2}),
            new Ingredient({'name' : 'jalapenos', 'price' : 2.4}),
            new Ingredient({'name' : 'Salami', 'price' : 0.4}),
            new Ingredient({'name' : 'Jambon', 'price' : 0.8}),
            new Ingredient({'name' : 'Cornichon', 'price' : 0.3}),
            new Ingredient({'name' : 'oignon', 'price' : 0.2}),
            new Ingredient({'name' : 'Avocat', 'price' : 2.7}),
            new Ingredient({'name' : 'Tomate', 'price' : 0.7}),
            new Ingredient({'name' : 'Thon', 'price' : 0.5}),

        ];

        Model.save(data, 'ingredients');
    }
}  