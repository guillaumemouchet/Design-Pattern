#include "Shape/Shape.hpp"

#include "Shape/Rectangle/Rectangle.hpp"
#include "Shape/Circle/Circle.hpp"
#include "Shape/Hexagon/Hexagon.hpp"

int main(int argc, char const *argv[])
{
    // V1 - First API
    Drawing * drawingAPI1 = new DrawingAPI1();
    cout << "Rectangle API1 : " << endl;
    Shape * rectV1 = new Rectangle(10, 10, 50, 100, 45, drawingAPI1);
    rectV1->draw();
    cout << endl;

    cout << "Circle API1: " << endl;
    Shape * circV1 = new Circle(5, 6, 10, drawingAPI1);
    circV1->draw();
    cout << endl;

    cout << "Hexagone API1: " << endl;
    Shape * hexaV1 = new Hexagon(10, 50, 50, drawingAPI1);
    hexaV1->draw();
    cout << endl;

    // V2 - Second API
    Drawing * drawingAPI2 = new DrawingAPI2();
    cout << "Rectangle API2: " << endl;
    Shape * rectV2 = new Rectangle(10, 10, 50, 100, 45, drawingAPI2);
    rectV2->draw();
    cout << endl;

    cout << "Circle API2: " << endl;
    Shape * circV2 = new Circle(5, 6, 10, drawingAPI2);
    circV2->draw();
    cout << endl;

    cout << "Hexagone API2: " << endl;
    Shape * hexaV2 = new Hexagon(50, 50, 10, drawingAPI2);
    hexaV2->draw();
    cout << endl;


    return 0;
}