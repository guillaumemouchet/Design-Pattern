#pragma once

#include <iostream>

//ComposantPanier est une calsse virtuelle pure, comme ça elle ne peut pas être crée.
class ComposantPanier
{
public:
    ComposantPanier() {}

    virtual void AjouterComposant(ComposantPanier *composant) {}
    virtual void SupprimerComposant(ComposantPanier *composant) {}

    virtual void AfficherFruits() = 0;
    virtual bool AvecOuSansPepin() = 0;
};