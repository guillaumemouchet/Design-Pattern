#ifndef SHAPE_HPP
#define SHAPE_HPP

#include <iostream>

class Shape
{
public:
    Shape() {}
    virtual ~Shape() {}

    virtual void draw() = 0;
};

#endif