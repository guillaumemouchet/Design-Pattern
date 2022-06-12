/**
 * @class IngredientDeco
 */
class IngredientDeco extends Model
{
    /**
     * Construct an IngredientDeco
     * @param {*} sandwich 
     * @param {*} name 
     * @param {*} price 
     */
    constructor(sandwich, name, price)
    {
        super();
        this.sandwich = sandwich;
        this.name = name;
        this.price = price;
    }

    /**
     * Save the sandwich in the localStorage
     */
    save()
    {
        Model.save(this, 'sandwich');
    }

    /**
     * Add the sandwich into the cart
     */
    addToCart()
    {
        // Get the current command
        let command = Command.fetch();

        // Add the sandwich to the command
        command.addSandwich(this);

        // Save the comment
        command.save();

        // Add sandwiches notification
        const previousValue = parseInt(Storage.getInstance()?.retrieveUniqueValue("new_sandwich_in_cart_notification") || 0);
        Model.save(previousValue + 1, "new_sandwich_in_cart_notification");
    }

    /**
     * Remove the sandwich
     */
    remove()
    {
        Model.remove('sandwich');
    }

    /**
     * Calculate the price of the decorated sandwich
     */
    calculatePrice()
    {
        return this.sandwich.calculatePrice() + this.price;
    }

    /**
     * 
     * @returns {string} HTML
     */
    getNameAsList()
    {
        return this.sandwich.getNameAsList() + '<li list-group-item d-flex justify-content-between align-items-center">' + this.name + '<span class="badge bg-info text-light rounded-pill float-end">'+ this.price +' CHF</span></li>';
    }
}