class Ingredient extends Model
{
    constructor(name, price)
    {
        super();
        this.name = name;
        this.price = price;
    }

    static fetchAll()
    {
        return Model.fetchAll('ingredients');
    }

    static fetchSandwich()
    {
        const storage = localStorage;
        const jsonSandwich = storage.getItem("sandwich");

        if(jsonSandwich == null || jsonSandwich == undefined)
        {
            return new Pain();
        }

        let currentDeco = JSON.parse(jsonSandwich);;

        let lstDeco = [];

        while(currentDeco)
        {
            lstDeco.push(currentDeco);
            currentDeco = currentDeco.sandwich;
        }

        let sandwich = new Pain();

        for(let i = lstDeco.length - 2; i >= 0; i--)
        {
            sandwich = new IngredientDeco(sandwich, lstDeco[i].name, lstDeco[i].price);
        }

        return sandwich;        
    }

    save()
    {
        Model.save(this, 'sandwich');
    }

    remove()
    {
        Model.remove('sandwich');
    }

    calculatePrice()
    {
        return this.price;
    }

    getNameAsList()
    {
        return "<li>" + this.name + "</li>";
    }
}