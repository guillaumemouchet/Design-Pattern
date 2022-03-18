#ifndef SHAPE_HPP
#define SHAPE_HPP

#define PI 3.14159265

#include <iostream>
#include "../Drawing/DrawingAPI1/DrawingAPI1.hpp"
#include "../Drawing/DrawingAPI2/DrawingAPI2.hpp"

class Shape
{
protected:
    Drawing * drawing = nullptr;

public:
    Shape(Drawing * drawing) { this->drawing = drawing; }
    virtual ~Shape() { delete this->drawing; }

    virtual void draw() = 0;

    static float convertDegToRad(int val) { return (PI * val) / 180.f; }
};

#endif