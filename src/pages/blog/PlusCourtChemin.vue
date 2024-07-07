<script setup lang="ts">
import ToC from "@/components/blog/ToC.vue";
import Title from "@/components/blog/Title.vue";
import Paragraph from "@/components/blog/Paragraph.vue";
import Maze from "@/components/shortest-path/Maze.vue";
import InlineCode from "@/components/blog/InlineCode.vue";
import Highlight from "@/components/Highlight.vue";
import Image from "@/components/blog/Image.vue";
import Code from "@/components/blog/Code.vue";
import Block from "@/components/blog/Block.vue";
const component = "ShortestPath";

</script>

<template>
  <div>
    <ToC></ToC>
    <Title>Plus court chemin</Title>
    <Paragraph>
      <template #title>
        👋 Introduction
      </template>
      <template #subtitle>
        🤔 C'est quoi ?
      </template>
      <template #content>
        Les <Highlight color="yellow">algorithmes de plus court chemin</Highlight> sont essentiels en informatique et en mathématiques pour résoudre des problèmes d’optimisation dans des graphes.
        Ils ont des applications variées, allant des réseaux de télécommunication à la planification de trajets, en passant par les jeux vidéo.
        Cette article se concentre sur deux algorithmes populaires : <InlineCode>Dijkstra</InlineCode> et <InlineCode>A*</InlineCode>.
      </template>
    </Paragraph>
    <Paragraph>
      <template #subtitle>
        🧑‍🏫 Avant de se lancer dans les algos...
      </template>
      <template #content>
        Pour comprendre les algorithmes de plus court chemin, il est important de connaître les bases des graphes.
        Un <Highlight color="yellow">graphe</Highlight> est un ensemble de <Highlight color="purple">sommets</Highlight> reliés par des <Highlight color="red">arêtes</Highlight>.
        <br>
        Les graphes peuvent être <Highlight color="green">orientés</Highlight> (les arêtes ont une direction) ou <Highlight color="blue">non orientés</Highlight> (les arêtes n'ont pas de direction).
        Les graphes peuvent également être <Highlight color="orange">pondérés</Highlight> (les arêtes ont un poids).

        <Image legend="Exemple de graphe orienté, non pondéré">
          <img src="@/assets/shortest-path/graph.png" alt="graph" class="w-72 h-fit" />
        </Image>

        <Block title="English mode" type="info">
          En anglais, un graphe est appelé <InlineCode>graph</InlineCode>, un sommet est appelé <InlineCode>vertex</InlineCode> et une arête est appelée <InlineCode>edge</InlineCode>.
        </Block>
      </template>
    </Paragraph>
    <Paragraph>
      <template #title>
        🧑‍💻 Algorithmes
      </template>
      <template #subtitle>
        Dijkstra
      </template>
      <template #content>
        L’algorithme de Dijkstra trouve le plus court chemin à partir d’un nœud source vers tous les autres nœuds dans un graphe pondéré avec des poids positifs.
        <br>
        <Code :parent="component" file="DijkstraPseudoCode"></Code>
        <Block title="Attention" type="warning">
          L'idée de Dijkstra est d'explorer tous les chemins possibles. On va être sûr de trouver le chemin le plus court, mais son temps de calcul peut être conséquent en fonction de la taille du graphe.
        </Block>
      </template>
    </Paragraph>
    <Paragraph>
      <template #subtitle>
        A*
      </template>
      <template #content>
        L'algorithme <Highlight color="yellow">A*</Highlight> (prononcé "A star") est une amélioration de l'algorithme de Dijkstra, en ce sens qu'il utilise une heuristique pour guider sa recherche vers l'objectif.
        <Code :parent="component" file="AStarPseudoCode" ></Code>
        Source : <a href="https://fr.wikipedia.org/wiki/Algorithme_A*">A* (Wikipedia)</a>
        <Block title="Note" type="info">
          A* utilise une fonction de coût <InlineCode>f(n) = g(n) + h(n)</InlineCode>, où <InlineCode>g(n)</InlineCode> représente le coût pour atteindre le nœud <InlineCode>n</InlineCode> depuis le nœud de départ, et <InlineCode>h(n)</InlineCode> est une estimation du coût restant pour atteindre l'objectif depuis <InlineCode>n</InlineCode>.
        </Block>
        L'efficacité de A* dépend de la qualité de l'heuristique utilisée. Une heuristique admissible (qui ne surestime jamais le coût réel pour atteindre l'objectif) garantit que A* trouvera le chemin le plus court de manière optimale.
      </template>
    </Paragraph>

    <Paragraph>
      <template #title>
        🔍 Comparaison
      </template>
      <template #content>
        Il est important de comparer les performances de Dijkstra et A* dans différentes situations pour comprendre leurs avantages et inconvénients respectifs.
        <Block title="Complexité" type="warning">
          La complexité temporelle de Dijkstra est <InlineCode>O((V+E) \log V)</InlineCode>, où <InlineCode>V</InlineCode> est le nombre de sommets et <InlineCode>E</InlineCode> est le nombre d'arêtes.
          Pour A*, la complexité temporelle dépend de la qualité de l'heuristique, mais dans le pire des cas, elle peut également être similaire à celle de Dijkstra.
        </Block>
        Vous pouvez tester les deux algorithmes sur le labyrinthe ci-dessous.
        <Block title="Comment utiliser ? " type="info">
          Vous pouvez changer les murs en cliquant sur les cases du labyrinthe. Le point de départ est la case <Highlight color="green">🟩 verte</Highlight> et l'objectif est la case <Highlight color="red">🟥 rouge</Highlight>. Vous pouvez également changer le départ et l'objectif en cliquant sur les cases correspondantes.
        </Block>
        <Maze class="mt-2" />
      </template>
    </Paragraph>

    <Paragraph>
      <template #title>
        🏁 Conclusion
      </template>
      <template #content>
        <Highlight color="yellow">Dijkstra</Highlight> offre une solution robuste et garantie pour trouver le plus court chemin, mais peut être lent pour des graphes très grands.
        <Highlight color="yellow">A*</Highlight> apporte une dimension supplémentaire avec son heuristique, permettant des recherches plus rapides dans de nombreux cas, mais sa performance dépend fortement de la qualité de l'heuristique.
      </template>
    </Paragraph>
  </div>
</template>

<style scoped>

</style>