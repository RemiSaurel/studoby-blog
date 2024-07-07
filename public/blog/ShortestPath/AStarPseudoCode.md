```text
Structure nœud = {
  x, y: Nombre
  cout, heuristique: Nombre
}

depart = Nœud(x=_, y=_, cout=0, heuristique=0)

Fonction compareParHeuristique(n1:Nœud, n2:Nœud)
   si n1.heuristique < n2.heuristique 
       retourner 1
   ou si n1.heuristique == n2.heuristique 
       retourner 0
   sinon
       retourner -1
       
Fonction cheminPlusCourt(g:Graphe, objectif:Nœud, depart:Nœud)
   closedList = File()
   openList = FilePrioritaire(comparateur = compareParHeuristique)
   openList.ajouter(depart)
   tant que openList n'est pas vide
       u = openList.defiler()
       si u.x == objectif.x et u.y == objectif.y
           reconstituerChemin(u)
           terminer le programme
       pour chaque voisin v de u dans g
           si non(   v existe dans closedList
                        ou v existe dans openList avec un coût inférieur)
                v.cout = u.cout +1 
                v.heuristique = v.cout + distance([v.x, v.y], [objectif.x, objectif.y])
                openList.ajouter(v)
       closedList.ajouter(u)
   terminer le programme (avec erreur)
```