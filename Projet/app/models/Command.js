class Command extends Model
{
    constructor(jsonCommand)
    {
        super();
        this.sandwiches = [];

        if(JSON.stringify(jsonCommand) != "[]")
        {
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
    }

    static fetch()
    {
        return Model.fetch('command', Command);
    }

    addSandwich(sandwich)
    {
        this.sandwiches.push(sandwich);
    }

    removeSandwich(sandwich)
    {
        this.sandwiches = Helper.removeItemInArrayOnce(this.sandwiches, sandwich);
    }

    save()
    {
        Model.remove('command');

        Model.save(this, 'command');
    }

    remove()
    {
        Model.remove('command');
    }
}