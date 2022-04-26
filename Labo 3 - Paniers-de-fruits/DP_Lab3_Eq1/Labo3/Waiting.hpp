#pragma once

#include <iostream>
#include "State.hpp"
#include "Paid.hpp"
using namespace std;

class Waiting : public State
{
public:
    void Handle() override
    {
        // N'affiche rien
        cout << "In waiting"<< endl;
        // Change state to paid
        this->context->TransitionTo(new Paid);
    }
};