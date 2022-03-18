#ifndef API2_H
#define API2_H

#include <iostream>

class API2
{
public:
    API2() {}
    ~API2() {}

    static void drawLine(int x1, int x2, int y1, int y2){
        std::cout << "\t" << "DrawLine at (" << x1 << "," << y1 << "), (" << x2 << ", " << y2 << ")"  << std::endl;
    }

    static void drawCircle(int y, int x, int radius){
        std::cout << "\t" << "DrawCircle at (" << x << ", " << y << ") with a radius of " << radius << std::endl;
    }
};

#endif