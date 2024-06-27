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
      <template #title>
        😎 Visualiser
      </template>
      <template #content>
        <Maze />
      </template>
    </Paragraph>
  </div>
</template>

<style scoped>

</style>