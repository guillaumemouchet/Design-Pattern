#pragma once

#include <iostream>

#include "composantPanier.h"

using namespace std;

class Fruit : public ComposantPanier
{
public:
    Fruit(string nom, bool pepin = false) : ComposantPanier() {
        this->nom = nom;
        this->pepin = pepin;
    }

    ~Fruit() { }

    void AfficherFruits() override
    {
        cout << this->nom;
    }

    bool AvecOuSansPepin() override
    {
        return this->pepin;
    }

private:
    string nom;
    bool pepin;
};