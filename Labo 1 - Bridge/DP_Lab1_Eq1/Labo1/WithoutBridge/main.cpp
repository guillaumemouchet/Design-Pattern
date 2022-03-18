#include "Shape/Shape.hpp"

#include "Shape/ShapeV1/RectangleV1/RectangleV1.hpp"
#include "Shape/ShapeV1/CircleV1/CircleV1.hpp"
#include "Shape/ShapeV1/HexagonV1/HexagonV1.hpp"

#include "Shape/ShapeV2/RectangleV2/RectangleV2.hpp"
#include "Shape/ShapeV2/CircleV2/CircleV2.hpp"
#include "Shape/ShapeV2/HexagonV2/HexagonV2.hpp"

int main(int argc, char const *argv[])
{
    // V1 - First API
    cout << "Rectangle API1: " << endl;
    Shape * rectV1 = new RectangleV1(10, 10, 50, 100, 45);
    rectV1->draw();
    cout << endl;

    cout << "Circle API1: " << endl;
    Shape * circV1 = new CircleV1(5, 6, 10);
    circV1->draw();
    cout << endl;

    cout << "Hexagone API1: " << endl;
    Shape * hexaV1 = new HexagonV1(10, 50, 50);
    hexaV1->draw();
    cout << endl;

    // V2 - Second API
    cout << "Rectangle API2: " << endl;
    Shape * rectV2 = new RectangleV2(10, 10, 50, 100, 45);
    rectV2->draw();
    cout << endl;

    cout << "Circle API2: " << endl;
    Shape * circV2 = new CircleV2(5, 6, 10);
    circV2->draw();
    cout << endl;

    cout << "Hexagone API2: " << endl;
    Shape * hexaV2 = new HexagonV2(50, 50, 10);
    hexaV2->draw();
    cout << endl;

    return 0;
}