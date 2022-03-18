#ifndef DRAWING_HPP
#define DRAWING_HPP

#include <iostream>

class Drawing
{
public:
    virtual void drawLine(int x1, int y1, int x2, int y2) = 0;
    virtual void drawCircle(int x, int y, int radius) = 0;
};

#endif