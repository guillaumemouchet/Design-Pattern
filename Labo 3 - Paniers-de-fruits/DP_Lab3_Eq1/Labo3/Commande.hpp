#pragma once

#include "State.hpp"

using namespace std;

class State;

class Commande
{
private:
    State *state;

public:
bool finished =  false;
    Commande(State *state) : state(nullptr)
    {
        cout << "Construction"<< endl;
        this->TransitionTo(state);
    }

    ~Commande() { delete state; }

    void TransitionTo(State *state)
    {
        cout << "Transition to " << typeid(*state).name() << ".\n";
        if (this->state != nullptr)
            delete this->state;
            
        this->state = state;
        this->state->setContext(this);
        
    }
    void TraiterCommande()
    {
        cout << "traiter commande"<< endl;
        this->state->Handle();
    }
};