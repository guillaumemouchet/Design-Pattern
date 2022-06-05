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

    addToCart()
    {
        Model.get
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
        return this.sandwich.getNameAsList() + '<li list-group-item d-flex justify-content-between align-items-center">' + this.name + '<span class="badge bg-primary rounded-pill">'+ this.price +' CHF</span></li>';
    }
}