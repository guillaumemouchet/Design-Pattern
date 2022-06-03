/**
 * @class Model
 *
 * Manages the data of the application.
 */
 class Model
 {
    static fetchAll(name, classname)
    {
        // Generate / Fetch data
        const data = [
            new Ingredient('Bacon', 1.9),
            new Ingredient('Laitue', 0.4),
            new Ingredient('Fromage', 0.8),
            new Ingredient('Poulet grillé', 2.2),
            new Ingredient('Frites', 1.4),
        ];

        // Storage.getInstance().readJsonFile("./data/ingredient.json");
        // Parse the data
        const dataJson = JSON.parse(JSON.stringify(data));

        const dataObject = [];

        // Fetch as Ingredient object
        dataJson.forEach(element => {
            dataObject.push(new Ingredient(element.name, element.price));
        });

        return dataObject;
    }

    static save(obj, name)
    {
        const storage = localStorage;

        const data = JSON.stringify(obj);

        storage.setItem(name, data);
    }

    static remove(name)
    {
        localStorage.setItem(name, null);
    }
}  