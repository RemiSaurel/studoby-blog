```text
Dijkstra(Graphe G, Noeud source):
    Initialiser la distance de tous les nœuds à l'infini, sauf la source (0)
    
    Créer un ensemble S (nœuds visités)
    
    Tant que S ne contient pas tous les nœuds:
        Choisir le nœud u dans V-S avec la plus petite distance
        Ajouter u à S
        
        Pour chaque voisin v de u:
            Si (distance de u + poids(u, v)) < (distance actuelle de v):
                Mettre à jour la distance de v
                
    Retourner la distance finale de chaque nœud
```