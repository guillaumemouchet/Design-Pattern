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
        return "<li>" + this.name + "</li>";
    }
}