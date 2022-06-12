/**
 * @class Pain
 */
class Pain extends ISandwich
{
    /**
     * Construct a Pain
     */
    constructor()
    {
        super();
        this.name = "Pain";
        this.price = 2.5;
    }

    /**
     * Save it into the localStorage
     */
    save()
    {
        Model.save(this, 'sandwich');
    }

    /**
     * Get the price
     * @returns {double} price
     */
    calculatePrice()
    {
        return this.price;
    }

    /**
     * 
     * @returns {stirng} HTML
     */
    getNameAsList()
    {
        return '<li list-group-item d-flex justify-content-between align-items-center">' + this.name + '<span class="badge bg-info text-light rounded-pill float-end">'+ this.price +' CHF</span></li>';
    }

    /**
     * Add the sandwich to the cart
     */
    addToCart()
    {
        // Get the current command
        let command = Command.fetch();

        // Add this sandwich to the command
        command.addSandwich(this);

        // save the command
        command.save();

        // Add notification
        const previousValue = parseInt(Storage.getInstance()?.retrieveUniqueValue("new_sandwich_in_cart_notification") || 0);
        Model.save(previousValue + 1, "new_sandwich_in_cart_notification");
    }

    /**
     * Remove the sandwich from the localStorage
     */
    remove()
    {
        Model.remove('sandwich');
    }
}