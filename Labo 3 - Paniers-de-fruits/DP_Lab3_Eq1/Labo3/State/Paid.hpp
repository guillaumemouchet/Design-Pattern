#ifndef PAID_H
#define PAID_H

#include <iostream>
#include "State.hpp"
#include "Sent.hpp"
using namespace std;

class Paid : public State
{
public:
    void Handle() override
    {
        // Affiche que la commande est traiée
        cout << "Votre commande a bien été payée et est en cours de traitement.\n";

        //Changer le status à envoyée
        this->commande->TransitionTo(new Sent);
    }

    string getName()
    {
        return "payée";
    }
};
#endif