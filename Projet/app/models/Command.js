/**
 * @class Command
 */
class Command extends Model
{
    /**
     * Construct a command from its JSON content
     * @param {Array} jsonCommand Command content in JSON format 
     */
    constructor(jsonCommand)
    {
        // Call the constructor of Model
        super();

        // Create a blank list of sandwichs as a class field
        this.sandwiches = [];

        // If the command is not empty
        if(JSON.stringify(jsonCommand) != "[]")
        {
            // If the command contains multiple sandwiches
            if(Array.isArray(jsonCommand.sandwiches))
            {
                // Parse all the sandwiches
                jsonCommand.sandwiches.forEach(sandwich => {
                    this.sandwiches.push(Ingredient.parseSandwich(sandwich));
                });
            }
            else
            {
                // Parse the only sandwich
                this.sandwiches.push(jsonCommand);
            } 
        }
    }

    /**
     * Fetch the current command
     * @returns {Command} The current command
     */
    static fetch()
    {
        return Model.fetch('command', Command);
    }

    /**
     * Add a sandwich to the current command
     * @param {Sandwich} sandwich Sandwich to add
     */
    addSandwich(sandwich)
    {
        this.sandwiches.push(sandwich);
    }

    /**
     * Remove a sandwich from the current command
     * @param {Sandwich} sandwich Sandwich to remove
     */
    removeSandwich(sandwich)
    {
        // Remove the first sandwich that is matching the sandwich to remove
        this.sandwiches = Helper.removeItemInArrayOnce(this.sandwiches, sandwich);
    }

    /**
     * Save the current command in the local storage
     */
    save()
    {
        // Remove the actual stored command
        Model.remove('command');

        // Save the command
        Model.save(this, 'command');
    }

    /**
     * Remove the command from the local storage
     */
    remove()
    {
        Model.remove('command');
    }
}