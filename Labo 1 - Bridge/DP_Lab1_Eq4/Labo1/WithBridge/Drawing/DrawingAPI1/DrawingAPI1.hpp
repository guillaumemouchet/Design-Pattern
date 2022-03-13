#ifndef DRAWINGAPI1_HPP
#define DRAWINGAPI1_HPP

#include "../Drawing.hpp"

#include "../../APIs/api1.hpp"


class DrawingAPI1 : public Drawing
{
public:
    DrawingAPI1(){ }

    void drawLine(int x1, int y1, int x2, int y2) override {
        API1::draw_a_line(x1, y1, x2, y2);
    }
    void drawCircle(int x, int y, int radius) override {
        API1::draw_a_circle(x, y, radius);
    }
};

#endif