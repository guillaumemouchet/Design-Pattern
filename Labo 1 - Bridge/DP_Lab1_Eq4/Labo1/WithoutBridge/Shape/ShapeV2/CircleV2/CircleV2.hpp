#ifndef CIRCLEV2_HPP
#define CIRCLEV2_HPP

#include "../ShapeV2.hpp"

class CircleV2 : public ShapeV2
{ 
private:
    int x, y, radius;

public:
    CircleV2(int x, int y, int radius){
        this->x = x;
        this->y = y;
        this->radius = radius;
    }

    ~CircleV2() {}

    void draw() override {
        this->drawCircle(x, y, radius);
    }
};

#endif