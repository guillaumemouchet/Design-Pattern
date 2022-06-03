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
        return '<li list-group-item d-flex justify-content-between align-items-center">' + this.name + '<span class="badge bg-primary rounded-pill">'+ this.price +' CHF</span></li>';
    }
}