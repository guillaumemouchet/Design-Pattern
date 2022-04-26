#ifndef State_H
#define State_H
#include <iostream>
#include "Commande.hpp"
using namespace std;

class Commande;
class State
{
protected:
    Commande *commande;

public:
    virtual ~State(){};
    void setCommande(Commande *commande)
    {
        this->commande = commande;
    }
    virtual string getName() = 0;
    virtual void Handle() = 0;
};
#endif