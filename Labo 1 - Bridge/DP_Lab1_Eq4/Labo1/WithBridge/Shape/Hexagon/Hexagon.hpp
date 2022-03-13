#ifndef HEXAGON_HPP
#define HEXAGON_HPP

#include "../Shape.hpp"

#include "math.h"

using namespace std;

class Hexagon : public Shape
{ 

private:
    float side;
	float h;
    float r;
    float x;
    float y; 
	float corners[6][2];

public:
    Hexagon() : Shape(new DrawingAPI1())
    {
        this->side = 0.0f;
        this->x = 0.f;
        this->y = 0.f;
        this->r = CalculateR(side);
        this->h = CalculateH(side);
        calculateCorners();
    }
    
    Hexagon(float x, float y, float _sideLenght, Drawing * drawing) : Shape(drawing) 
    {
        this->side = _sideLenght;
        this->x = x;
        this->y = y;
        this->r = CalculateR(side);
        this->h = CalculateH(side);
        calculateCorners();
    }

    float CalculateR(float side)
    {
        return cosf(convertDegToRad(30)) * side;
    }
    float CalculateH(float side)
    {
        return sinf(convertDegToRad(30)) * side;
    }
    void calculateCorners()
    {
        corners[0][0] = x;
        corners[0][1] = y;
        corners[1][0] = x + r;
        corners[1][1] = y + h;
        corners[2][0] = x + r;
        corners[2][1] = y + h + side;
        corners[3][0] = x;
        corners[3][1] = y + side + side;
        corners[4][0] = x - r;
        corners[4][1] = y + h + side;
        corners[5][0] = x - r;
        corners[5][1] = y + h; 
    }
    void draw() override
    {
        for (int i = 0; i < 5; i++) {
            float x1 = corners[i][0];
            float y1 = corners[i][1];
            float x2 = corners[i + 1][0];
            float y2 = corners[i + 1][1];
            this->drawing->drawLine(x1, y1, x2, y2);            
        }
        this->drawing->drawLine(corners[0][0], corners[0][1], corners[5][0], corners[5][1]);
    }
};

#endif