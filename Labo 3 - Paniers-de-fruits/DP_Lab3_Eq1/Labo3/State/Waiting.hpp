#ifndef WAITING_H
#define WAITING_H

#include <iostream>
#include "State.hpp"
#include "Paid.hpp"
using namespace std;

class Waiting : public State
{
public:
    void Handle() override
    {
        //Affiche Rien
        // Change le status à payée
        this->commande->TransitionTo(new Paid);
    }
    string getName()
    {
        return "en attente";
    }
};
#endif