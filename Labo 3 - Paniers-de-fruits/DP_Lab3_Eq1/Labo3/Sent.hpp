#pragma once

#include <iostream>
#include "State.hpp"
using namespace std;

class Sent : public State 
{
public:
    void Handle() override
    {
        cout << "In Sent"<< endl;

        // Affiche que c'est traité
        cout << "Your order has been sent.\n";

        //End of state dont know how to delete;
        this->context->finished = true;
        //this->context->TransitionTo(nullptr);

    }
};