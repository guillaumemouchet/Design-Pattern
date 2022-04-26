#pragma once

#include <iostream>
#include "State.hpp"
#include "Sent.hpp"
using namespace std;

class Paid : public State
{
public:
    void Handle() override
    {
        cout << "In Paid"<< endl;

        // Affiche que c'est traite
        cout << "Your order has been placed and is treated by one of our employees.\n";

        // Change state to paid
        this->context->TransitionTo(new Sent);
    }
};