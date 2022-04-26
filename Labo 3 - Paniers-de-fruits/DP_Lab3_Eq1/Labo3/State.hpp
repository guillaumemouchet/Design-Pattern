#pragma once

#include <iostream>
#include "Commande.hpp"

using namespace std;

class Commande;

class State
{
protected:
    Commande *context;

public:
    
    virtual ~State() {};
    void setContext(Commande *context)
    {
        this->context = context;
    }

    virtual void Handle() = 0;
};