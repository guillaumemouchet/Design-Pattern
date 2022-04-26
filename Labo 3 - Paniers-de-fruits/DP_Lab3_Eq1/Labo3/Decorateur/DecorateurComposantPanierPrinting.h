#pragma once

#include <iostream>

#include "Old/DecorateurComposantPanier.h"

using namespace std;

class DecorateurComposantPanierPrinting : public DecorateurComposantPanier
{
private:
    char c;

public:
    DecorateurComposantPanierPrinting(ComposantPanier *composant, char c) : DecorateurComposantPanier()
    {
        this->composant = composant;
        this->c = c;
    }

    void AfficherFruits() override
    {
        if (this->c == ' ')
        {            
            this->composant->AfficherFruits();
        }
        else
        {
            for (int i = 0; i < 20; i++)
                cout << this->c;
            cout << endl;
            this->composant->AfficherFruits();
            for (int i = 0; i < 20; i++)
                cout << this->c;
            cout << endl;
        }
    }
};