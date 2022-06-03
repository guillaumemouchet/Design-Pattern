class IngredientDeco extends Model
{
    constructor(sandwich, name, price)
    {
        super();
        this.sandwich = sandwich;
        this.name = name;
        this.price = price;
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
        return this.sandwich.calculatePrice() + this.price;
    }

    getNameAsList()
    {
        return this.sandwich.getNameAsList() + "<li>" + this.name+ "</li>";
    }
}