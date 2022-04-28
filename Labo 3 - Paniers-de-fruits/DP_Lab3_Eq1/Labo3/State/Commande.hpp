#ifndef CONTEXT_H
#define CONTEXT_H

#include "State.hpp"

using namespace std;
class State;
class Commande
{
private:
    State *state;

public:
    //Est utilisé pour savoir quand arrêter de traiter une commande.
    bool finished = false;

    //Quand on crée une commande on lui fait directement transitionner d'état
    Commande(State *state) : state(nullptr)
    {
        this->TransitionTo(state);
    }

    ~Commande() { delete state; }

    //Permet de passer d'un état à l'autre et de supprimer l'état déjà passé pour éviter une fuite de mémoire
    void TransitionTo(State *state)
    {
        cout << "Transition vers " << state->getName() << ".\n";
        if (this->state != nullptr)
            delete this->state;

        this->state = state;
        this->state->setCommande(this); //On set chaque état à la même commande
    }
    
    //TraiterCommande appelera la même méthode mais l'appel changera suivant classe effective
    void TraiterCommande()
    {
        this->state->Handle();
    }
};
#endif