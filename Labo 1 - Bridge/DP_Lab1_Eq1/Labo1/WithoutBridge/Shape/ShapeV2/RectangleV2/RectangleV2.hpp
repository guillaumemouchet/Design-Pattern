#ifndef RECTANGLEV2_HPP
#define RECTANGLEV2_HPP

#include "../ShapeV2.hpp"

class RectangleV2 : public ShapeV2
{ 
private:
    float x, y, width, height, alpha;

public:
    RectangleV2(float x, float y, float width, float height, float alpha){
        this->x = x;
        this->y = y;
        this->width = width;
        this->height = height;
        this->alpha = alpha;
    }

    ~RectangleV2() {}

    void draw() override {
        float alphaRad = convertDegToRad(alpha);
        float betaRad = convertDegToRad(90.f - alpha);
        
        float x2 = x + (cosf(alphaRad) * width);
        float y2 = y + (sinf(alphaRad) * width);

        float x3 = x2 - cosf(betaRad) * height;
        float y3 = y2 + sinf(betaRad) * height;

        float x4 = x - (cosf(betaRad) * height);
        float y4 = y + (sinf(betaRad) * height);

        this->drawLine(x , y , x2, y2);
        this->drawLine(x , y , x4, y4);
        this->drawLine(x2, y2, x3, y3);
        this->drawLine(x3, y3, x4, y4);
    }
};

#endif