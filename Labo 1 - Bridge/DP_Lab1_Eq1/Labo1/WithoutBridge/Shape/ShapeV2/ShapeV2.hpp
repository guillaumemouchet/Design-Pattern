#ifndef SHAPEV2_HPP
#define SHAPEV2_HPP

#include "../Shape.hpp"
#include "../../APIs/api2.hpp"

class ShapeV2 : public Shape
{
protected:
    void drawLine(int x1, int y1, int x2, int y2){
        API2::drawLine(x1, x2, y1, y2); // Call with different order
    }
    void drawCircle(int x, int y, int radius){
        API2::drawCircle(y, x, radius);
    }
    
public:
    ShapeV2() {}
    virtual ~ShapeV2() {}

    virtual void draw() = 0;

    static float convertDegToRad(int val) { return (180.f * val) / PI; }
};

#endif