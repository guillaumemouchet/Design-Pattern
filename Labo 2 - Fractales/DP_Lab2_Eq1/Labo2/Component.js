// Abstract class based on : https://stackoverflow.com/questions/597769/how-do-i-create-an-abstract-base-class-in-javascript

class Component {
  constructor(pos) {
    // If the class that is instanciated is Component, throw an exception
    if (this.constructor == Component) {
      throw new TypeError(
        'Abtract class "Component" cannot be instantiated directly.'
      );
    }

    // If draw is not implemented, throw an exeption
    if (this.draw === undefined) {
      throw new TypeError(
        'Classes extending the abstract class "Component" must contain "draw()"'
      );
    }

    // If update is not implemented, throw an exception
    if (this.update === undefined) {
      throw new TypeError(
        'Classes extending the abstract class "Component" must contain "update()"'
      );
    }

    this.pos = pos;
        
    // Get drawer instance with singleton
    this.drawer = Singleton.getDrawer();
  }
}
