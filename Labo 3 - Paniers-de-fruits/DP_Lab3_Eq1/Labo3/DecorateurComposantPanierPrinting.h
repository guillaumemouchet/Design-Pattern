#pragma once

#include <iostream>

#include "DecorateurComposantPanier.h"

using namespace std;

class DecorateurComposantPanierPrinting : public DecorateurComposantPanier
{
private:
    char c;
public:
    DecorateurComposantPanierPrinting(ComposantPanier * composant, char c) : DecorateurComposantPanier() {
        this->composant = composant;
        this->c = c;
    }

    void AfficherFruits() override {
        for(int i = 0; i < 10; i++) cout << this->c;
        cout << endl;
        this->composant->AfficherFruits();
        for(int i = 0; i < 10; i++) cout << this->c;
        cout << endl;
    }
};