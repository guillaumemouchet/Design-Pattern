#ifndef CIRCLE_HPP
#define CIRCLE_HPP

#include "../Shape.hpp"

class Circle : public Shape
{ 
private:
    int x, y, radius;

public:
    Circle(int x, int y, int radius, Drawing * drawing) : Shape(drawing) {
        this->x = x;
        this->y = y;
        this->radius = radius;
    }

    ~Circle() {}

    void draw() override {
        this->drawing->drawCircle(x, y, radius);
    }
};

#endif