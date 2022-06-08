class Pain extends ISandwich
{
    constructor()
    {
        super();
        this.name = "Pain";
        this.price = 2.5;
    }

    save()
    {
        Model.save(this, 'sandwich');
    }

    calculatePrice()
    {
        return this.price;
    }

    getNameAsList()
    {
        return '<li list-group-item d-flex justify-content-between align-items-center">' + this.name + '<span class="badge bg-info text-light rounded-pill float-end">'+ this.price +' CHF</span></li>';
    }

    addToCart()
    {
        let command = Command.fetch();
        command.addSandwich(this);
        command.save();

        // Add notification
        const previousValue = parseInt(Storage.getInstance()?.retrieveUniqueValue("new_sandwich_in_cart_notification") || 0);
        Model.save(previousValue + 1, "new_sandwich_in_cart_notification");
    }

    remove()
    {
        Model.remove('sandwich');
    }
}