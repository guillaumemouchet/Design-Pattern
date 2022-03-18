#ifndef DRAWINGAPI2_HPP
#define DRAWINGAPI2_HPP

#include "../Drawing.hpp"

#include "../../APIs/api2.hpp"


class DrawingAPI2 : public Drawing
{
public:
    DrawingAPI2(){ }

    void drawLine(int x1, int y1, int x2, int y2) override {
        API2::drawLine(x1, x2, y1, y2);
    }
    void drawCircle(int x, int y, int radius) override {
        API2::drawCircle(y, x, radius);
    }
};

#endif