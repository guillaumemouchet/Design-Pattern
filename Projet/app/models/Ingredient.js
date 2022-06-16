/**
 * @class Ingredient
 */
class Ingredient extends Model
{
    /**
     * Construct an Ingregient object from its JSON content
     * @param {Array} jsonIngredient Ingredient content in JSON format
     */
    constructor(jsonIngredient)
    {
        // Call the constructor of Model
        super();

        // Set the inputs
        this.name = jsonIngredient.name;
        this.price = jsonIngredient.price;
    }

    /**
     * Fetch all the current stored in the local storage
     * @returns {Ingredient Array}
     */
    static fetchAll()
    {
        return Model.fetchAll('ingredients', Ingredient);
    }

    /**
     * Fetch the current sandwich
     * @returns {Sandwich} Current sandwich
     */
    static fetchSandwich()
    {
        return Ingredient.parseSandwichFromText(Model.fetchAsText('sandwich'));
    }


    static parseSandwichFromJSON(json)
    {
        if(json == null || json == undefined)
        {
            return new Pain();
        }

        let currentDeco = json;

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

    /**
     * Create a decorated sandwich from JSON
     * @param {JSON} json Decorated sandwich in JSON format
     * @returns 
     */
    static parseSandwichFromText(text)
    {
        if(text == null || text == undefined || text == "")
        {
            return new Pain();
        }

        let currentDeco = JSON.parse(text);

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

    /**
     * Get the price of the ingredient
     * @returns {float} Price
     */
    calculatePrice()
    {
        return this.price;
    }

    /**
     * Get the ingredient as a list element
     * @returns {string} HTML
     */
    getNameAsList()
    {
        return '<li list-group-item d-flex justify-content-between align-items-center">' + this.name + '<span class="badge bg-info text-light rounded-pill float-end">'+ this.price +' CHF</span></li>';
    }
}