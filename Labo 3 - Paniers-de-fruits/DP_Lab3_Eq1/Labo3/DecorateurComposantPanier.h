#pragma once

#include <iostream>

#include "composantPanier.h"

class DecorateurComposantPanier : public ComposantPanier
{
protected:
    ComposantPanier * composant;

public:
    DecorateurComposantPanier() { }
    ~DecorateurComposantPanier() {
        delete this->composant; this->composant = nullptr;
    }

    virtual void AfficherFruits() = 0;
    bool AvecOuSansPepin() override {
        return this->composant->AvecOuSansPepin();
    }
};