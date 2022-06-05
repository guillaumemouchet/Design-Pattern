class Ingredient extends Model
{
    constructor(jsonIngredient)
    {
        super();
        this.name = jsonIngredient.name;
        this.price = jsonIngredient.price;
    }

    static fetchAll()
    {
        return Model.fetchAll('ingredients', Ingredient);
    }

    static fetchSandwich()
    {
        const storage = localStorage;
        const jsonSandwich = storage.getItem("sandwich");

        return Ingredient.parseSandwichFromJson(jsonSandwich);
    }

    static parseSandwichFromJson(json)
    {
        if(json == null || json == undefined)
        {
            return new Pain();
        }

        let currentDeco = JSON.parse(json);;

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

    static parseSandwich(currentDeco)
    {
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

    static addToCart(sandwich)
    {

    }
}