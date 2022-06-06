class Command extends Model
{
    constructor(jsonCommand)
    {
        super();
        this.sandwiches = [];

        if(Array.isArray(jsonCommand.sandwiches))
        {
            jsonCommand.sandwiches.forEach(sandwich => {
                this.sandwiches.push(Ingredient.parseSandwich(sandwich));
            });
        }
        else
        {
            this.sandwiches.push(jsonCommand);
        } 
    }

    static fetch()
    {
        return Model.fetch('command', Command);
    }

    addSandwich(sandwich)
    {
        this.sandwiches.push(sandwich);
    }

    save()
    {
        const storage = localStorage;

        Model.remove('command');

        Model.save(this, 'command');
    }
}