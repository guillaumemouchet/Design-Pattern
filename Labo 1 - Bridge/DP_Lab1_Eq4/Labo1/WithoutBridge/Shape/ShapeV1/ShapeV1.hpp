#ifndef SHAPEV1_HPP
#define SHAPEV1_HPP

#define PI 3.14159265

#include "../Shape.hpp"
#include "../../APIs/api1.hpp"
#include <math.h>

class ShapeV1 : public Shape
{
protected:
    void drawLine(int x1, int y1, int x2, int y2){
        API1::draw_a_line(x1, y1, x2, y2);
    }
    void drawCircle(int x, int y, int radius){
        API1::draw_a_circle(x, y, radius);
    }
    
public:
    ShapeV1() {}
    virtual ~ShapeV1() {}

    virtual void draw() = 0;

    static float convertDegToRad(int val) { return (PI * val) / 180.f; }
};

#endif