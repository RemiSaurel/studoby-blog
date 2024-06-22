<script setup lang="ts">
import Square from "@/components/shapes/Square.vue";
import anime from "animejs/lib/anime.es.js";
import { onMounted } from "vue";
import Line from "@/components/shapes/Line.vue";
import Title from "@/components/blog/Title.vue";
import Paragraph from "@/components/blog/Paragraph.vue";
import Circle from "@/components/shapes/Circle.vue";
import InlineCode from "@/components/blog/InlineCode.vue";
import Code from "@/components/blog/Code.vue";

const component = "HadoopMapReduce";

const startMapperAnimation = () => {
  // Function to create the animation timeline
  const createTimeline = () => {
    const timeline = anime.timeline({
      loop: true,
      easing: "easeInOutSine",
    });

    timeline
      .add({
        targets: ".circles > *",
        translateX: 120,
        duration: 800,
        opacity: 1,
        delay: () => {
          return Math.random() * 1000; // Random delay between 0 and 1000 milliseconds
        },
      })
      .add({
        targets: ".circles > *",
        opacity: 0,
      });
  };
  createTimeline();
};
const startBigPictureAnimation = () => {
  // Create a timeline
  const timeline = anime.timeline({
    loop: true, // Enable looping
    easing: "easeInOutSine", // Default easing for all animations
  });

  timeline
    .add({
      targets: ".lines > *",
      width: "10rem",
      duration: 1000,
    })
    .add({
      targets: ".shuffle",
      scale: 1.2,
    })
    .add({
      targets: ".start-reducer > *",
      width: "10rem",
      duration: 1000,
    })
    .add({
      targets: ".reducer",
      scale: 1.2,
    })
    .add({
      duration: 1000,
    });
};

onMounted(() => {
  startMapperAnimation();
  startBigPictureAnimation();
});
</script>

<template>
  <div>
    <Title>Hadoop MapReduce</Title>
    <Paragraph>
      <template #title> 👋 Introduction </template>
      <template #subtitle> 🧑‍💻 BigData </template>
      <template #content>
        L'ère du Big Data a transformé notre manière de gérer et d'analyser les
        données. Pour traiter des volumes massifs de données, des outils
        spécialisés comme Hadoop ont été développés. L'un des concepts
        fondamentaux derrière Hadoop est <strong>MapReduce</strong>.
      </template>
    </Paragraph>
    <Paragraph>
      <template #subtitle> ♻️ MapReduce </template>
      <template #content>
        MapReduce est un modèle de programmation développé par Google pour
        traiter de grandes quantités de données en parallèle sur des clusters de
        machines. L'idée principale est de diviser une tâche en sous-tâches plus
        petites (Map) et de combiner les résultats (Reduce). Tout va se passer
        avec un système de <InlineCode>Clé-Valeur</InlineCode>.
      </template>
    </Paragraph>
    <Paragraph>
      <template #subtitle> 🚀 Mapper </template>
      <template #content>
        <div
          class="flex items-center justify-center gap-32 bg-white rounded-lg p-4"
        >
          <div class="flex flex-col gap-2">
            <Square color="bg-slate-8 text-white" text="Fic.1" />
            <Square color="bg-slate-8 text-white" text="Fic.2" />
            <Square color="bg-slate-8 text-white" text="Fic.3" />
          </div>
          <div class="flex flex-col gap-16 -ml-28 circles">
            <Circle color="bg-slate-7 text-white" />
            <Circle color="bg-slate-7 text-white" />
            <Circle color="bg-slate-7 text-white" />
          </div>
          <div class="flex flex-col gap-2 mapper-squares">
            <Square color="bg-red-2" text="M1" />
            <Square color="bg-blue-2" text="M2" />
            <Square color="bg-green-2" text="M3" />
          </div>
        </div>
      </template>
    </Paragraph>

    <Paragraph>
      <template #content>
        <div class="flex gap-1 mb-2">
          <Circle color="bg-slate-7 text-white" /> = représente une partie de
          fichier
        </div>
        Notre petite boule représente des données d'un fichier que l'on souhaite
        traîter. Pour chaque fichier, 1 (ou plusieurs
        <InlineCode>Mapper</InlineCode>) sera instantié pour effectuer le
        traîtement.
      </template>
    </Paragraph>

    <Paragraph>
      <template #content>
        Mais quel traîtement va être effectué ? Et bien, comme dit précédemment,
        le <InlineCode>Mapper</InlineCode> va recevoir des données. Prenons un
        exemple concret : on souhaite compter le nombre de mots dans un fichier.
        Voici le contenu d'un fichier :
        <Code :parent="component" file="mapper"></Code>
      </template>
    </Paragraph>

    <div class="flex items-center gap-4 bg-white rounded-lg p-4">
      <div class="flex flex-col gap-2">
        <Square color="bg-red-2" text="M1" />
        <Square color="bg-blue-2" text="M2" />
        <Square color="bg-green-2" text="M3" />
      </div>
      <div class="flex w-40 flex-col gap-12 lines">
        <Line class="top-14 rotate-20" color="bg-red-2" />
        <Line class="top-26" color="bg-blue-2" />
        <Line class="top-40 -rotate-20" color="bg-green-2" />
      </div>
      <div class="flex flex-col gap-2 shuffle">
        <Square color="bg-amber-1" text="Shuffle & Sort" />
      </div>
      <div class="w-40 start-reducer">
        <Line color="bg-amber-1" />
      </div>
      <div class="flex flex-col gap-2 reducer">
        <Square color="bg-neutral-2" text="Reducer" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
