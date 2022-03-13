#ifndef API1_H
#define API1_H

#include <iostream>

class API1
{
public:
    API1() {}
    ~API1() {}

    static void draw_a_line(int x1, int y1, int x2, int y2){
        std::cout << "\t" << "draw_a_line at (" << x1 << "," << y1 << "), (" << x2 << ", " << y2 << ")"  << std::endl;
    }

    static void draw_a_circle(int x, int y, int radius){
        std::cout << "\t" << "draw_a_circle at (" << x << ", " << y << ") with a radius of " << radius << std::endl;
    }
};

#endif