#ifndef SENT_H
#define SENT_H

#include <iostream>
#include "State.hpp"
using namespace std;

class Sent : public State
{
public:
    void Handle() override
    {
        //Affiche que la commande a été envoyée
        cout << "Votre commande à été envoyée.\n";

        //Fin de la commande
        this->commande->finished = true;
    }
    string getName()
    {
        return "Sent";
    }
};
#endif