#ifndef CIRCLEV1_HPP
#define CIRCLEV1_HPP

#include "../ShapeV1.hpp"

class CircleV1 : public ShapeV1
{ 
private:
    int x, y, radius;

public:
    CircleV1(int x, int y, int radius){
        this->x = x;
        this->y = y;
        this->radius = radius;
    }

    ~CircleV1() {}

    void draw() override {
        this->drawCircle(x, y, radius);
    }
};

#endif