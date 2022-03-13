#ifndef RECTANGLE_HPP
#define RECTANGLE_HPP

#include "../Shape.hpp"

#include "math.h"

class Rectangle : public Shape
{ 
private:
    float x, y, width, height, alpha;

public:
    Rectangle(float x, float y, float width, float height, float alpha, Drawing * drawing) : Shape(drawing) {
        this->x = x;
        this->y = y;
        this->width = width;
        this->height = height;
        this->alpha = alpha;
    }

    ~Rectangle() {}

    void draw() override {
        float alphaRad = convertDegToRad(alpha);
        float betaRad = convertDegToRad(90.f - alpha);
        
        float x2 = x + (cosf(alphaRad) * width);
        float y2 = y + (sinf(alphaRad) * width);

        float x3 = x2 - (cosf(betaRad) * height);
        float y3 = y2 + (sinf(betaRad) * height);

        float x4 = x - (cosf(betaRad) * height);
        float y4 = y + (sinf(betaRad) * height);

        this->drawing->drawLine(x , y , x2, y2);
        this->drawing->drawLine(x , y , x4, y4);
        this->drawing->drawLine(x2, y2, x3, y3);
        this->drawing->drawLine(x3, y3, x4, y4);
    }
};

#endif