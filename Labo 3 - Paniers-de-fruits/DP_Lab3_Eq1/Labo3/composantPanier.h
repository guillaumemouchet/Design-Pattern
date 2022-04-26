#pragma once

#include <iostream>

class ComposantPanier
{
public:
    ComposantPanier() { }

    virtual void AjouterComposant(ComposantPanier * composant) { }
    virtual void SupprimerComposant(ComposantPanier * composant) { }

    virtual void AfficherFruits() = 0;
    virtual bool AvecOuSansPepin() = 0;

};