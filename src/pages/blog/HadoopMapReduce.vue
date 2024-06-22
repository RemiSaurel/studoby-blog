<script setup lang="ts">
import { onMounted } from "vue";
import Square from "@/components/shapes/Square.vue";
import anime from "animejs/lib/anime.es.js";
import Line from "@/components/shapes/Line.vue";
import Title from "@/components/blog/Title.vue";
import Paragraph from "@/components/blog/Paragraph.vue";
import Circle from "@/components/shapes/Circle.vue";
import InlineCode from "@/components/blog/InlineCode.vue";
import Code from "@/components/blog/Code.vue";
import AnimationContainer from "@/components/blog/AnimationContainer.vue";
import ToC from "@/components/blog/ToC.vue";

const component = "HadoopMapReduce";

// Function to start animations
const startMapperAnimation = () => {
  const createTimeline = () => {
    const timeline = anime.timeline({
      loop: true,
      easing: "easeInOutSine",
    });

    timeline
      .add({
        targets: ".circles > *",
        translateX: "10rem",
        duration: 800,
        opacity: 1,
        delay: () => Math.random() * 1000,
      })
      .add({
        targets: ".circles > *",
        opacity: 0,
      });
  };
  createTimeline();
};

const startBigPictureAnimation = () => {
  const timeline = anime.timeline({
    loop: true,
    easing: "easeInOutSine",
  });

  timeline
    .add({
      targets: ".circles-bp > *",
      translateX: 40,
      duration: 800,
      opacity: 1,
      delay: () => Math.random() * 1000,
    })
    .add({
      targets: ".lines > *",
      width: "5rem",
      duration: 1000,
    })
    .add({
      targets: ".shuffle",
      scale: 1.2,
    })
    .add({
      targets: ".start-reducer > *",
      width: "5rem",
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
    <ToC></ToC>
    <!-- Content -->
    <Title>Hadoop : MapReduce</Title>
    <Paragraph>
      <template #title>👋 Introduction</template>
      <template #subtitle>🧑‍💻 BigData</template>
      <template #content>
        L'ère du Big Data a transformé notre manière de gérer et d'analyser les
        données. Pour traiter des volumes massifs de données, des outils
        spécialisés comme Hadoop ont été développés. L'un des concepts
        fondamentaux derrière Hadoop est <strong>MapReduce</strong>.
      </template>
    </Paragraph>
    <Paragraph>
      <template #subtitle>♻️ MapReduce</template>
      <template #content>
        MapReduce est un modèle de programmation développé par Google pour
        traiter de grandes quantités de données en parallèle sur des clusters de
        machines. L'idée principale est de diviser une tâche en sous-tâches plus
        petites (Map) et de combiner les résultats (Reduce). Tout va se passer
        avec un système de <InlineCode>Clé-Valeur</InlineCode>.
      </template>
    </Paragraph>
    <Paragraph>
      <template #title>🧑‍💻 Code</template>
      <template #subtitle>🚀 Mapper</template>
      <template #content>
        <AnimationContainer legend="Lecture des fichiers par les Mapper">
          <div class="flex flex-col gap-2">
            <Square color="bg-slate-8 text-white" text="Fic.1" />
            <Square color="bg-slate-8 text-white" text="Fic.2" />
            <Square color="bg-slate-8 text-white" text="Fic.3" />
          </div>
          <div class="flex flex-col gap-16 circles w-35">
            <Circle color="bg-slate-7 text-white" />
            <Circle color="bg-slate-7 text-white" />
            <Circle color="bg-slate-7 text-white" />
          </div>
          <div class="flex flex-col gap-2 mapper-squares">
            <Square color="bg-red-2" text="M1" />
            <Square color="bg-blue-2" text="M2" />
            <Square color="bg-green-2" text="M3" />
          </div>
        </AnimationContainer>
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
        traîtement. Dans notre cas, nous n'avons qu'un seul
        <InlineCode>Mapper</InlineCode> par fichier.
      </template>
    </Paragraph>

    <Paragraph>
      <template #content>
        Mais quel traîtement va être effectué ? Et bien, comme dit précédemment,
        le <InlineCode>Mapper</InlineCode> va recevoir des données. Prenons un
        exemple concret : on souhaite compter le nombre de mots dans un fichier.
        Voici le contenu des 3 fichiers :
        <Code :parent="component" file="file1"></Code>
        <Code :parent="component" file="file2"></Code>
        <Code :parent="component" file="file3"></Code>
        À ce stade là, nous pouvons identifier ce que les différents
        <InlineCode>Mapper</InlineCode> vont nous produire.
        <br />
        <InlineCode>M1 : (roi, 1), (Bonjour, 1)</InlineCode>
        <br />
        <InlineCode
          >M2 : (Bonjour, 1), (le, 1), (roi, 1), (monde, 1)</InlineCode
        >
        <br />
        <InlineCode>M3 : (Bonjour, 1), (le, 1), (monde, 1)</InlineCode>
      </template>
    </Paragraph>

    <Paragraph>
      <template #content>
        Concernant l'implantation en Java, rien de particulier. En utilisant les
        éléments d'Hadoop (<InlineCode>LongWritable</InlineCode>,
        <InlineCode>IntWritable</InlineCode>,
        <InlineCode>Text</InlineCode> etc.), nous pouvons facilement implémenter
        un <InlineCode>Mapper</InlineCode>.
        <Code :parent="component" file="MapperJava"></Code>
        Notez la constante à la ligne 2. Pour chaque mot, nous allons émettre un
        couple <InlineCode>Clé-Valeur</InlineCode> avec la clé étant le mot et
        la valeur étant 1. Nous écrivons cela grâce à la ligne 13 et la méthode
        <InlineCode class="italic">write()</InlineCode>.
      </template>
    </Paragraph>

    <Paragraph>
      <template #subtitle> 🚀 Shuffle & Sort </template>
      <template #content>
        <AnimationContainer
          legend="Sortie du Mapper et entrée du Shuffle & Sort"
        >
          <div class="flex flex-col gap-2">
            <Square color="bg-red-2" text="M1" />
            <Square color="bg-blue-2" text="M2" />
            <Square color="bg-green-2" text="M3" />
          </div>
          <div class="flex flex-col gap-12 lines">
            <Line class="top-14 rotate-20" color="bg-red-2" />
            <Line class="top-26" color="bg-blue-2" />
            <Line class="top-40 -rotate-20" color="bg-green-2" />
          </div>
          <div class="flex flex-col gap-2 shuffle">
            <Square color="bg-amber-1" text="Shuffle & Sort" />
          </div>
        </AnimationContainer>
        Maintenant que nous connaissons la sortie du
        <InlineCode>Mapper</InlineCode>, nous allons passer à l'étape du
        <InlineCode>Shuffle & Sort</InlineCode>.
        <br />
        Concrètement, le <InlineCode>Shuffle & Sort</InlineCode> va récupérer
        les données de tous les <InlineCode>Mapper</InlineCode>, les regrouper
        par clé et les trier.
        <br />
        Nous allons donc nous retrouver avec ces éléments là en sortie de cette
        étape :
        <br />
        <InlineCode> (le, [1, 1])</InlineCode>
        <br />
        <InlineCode>(monde, [1, 1])</InlineCode>
        <br />
        <InlineCode> (roi, [1, 1]) </InlineCode>
        <br />
        <InlineCode>(Bonjour, [1, 1, 1])</InlineCode>
      </template>
    </Paragraph>

    <Paragraph>
      <template #subtitle> 🚀 Reducer </template>
      <template #content>
        <AnimationContainer
          legend="Sortie du Shuffle & Sort et entrée du Reducer"
        >
          <div class="flex flex-col gap-2 shuffle">
            <Square color="bg-amber-1" text="Shuffle & Sort" />
          </div>
          <div class="start-reducer">
            <Line color="bg-amber-1" />
          </div>
          <div class="flex flex-col gap-2 reducer">
            <Square color="bg-neutral-2" text="Reducer" />
          </div>
        </AnimationContainer>
        Pour chaque <InlineCode>(clé, [valeurs...]</InlineCode>, le
        <InlineCode>Reducer</InlineCode> va appliquer un traitement. Ici, nous
        incrémentons de 1 pour chaque valeur, nous permettant ainsi d'avoir le
        nombre d'occurences de chaque mot.
        <br />
        Le code du <InlineCode>Reducer</InlineCode> est le suivant :
        <Code :parent="component" file="ReducerJava"></Code>
      </template>
    </Paragraph>
    <Paragraph>
      <template #title>📸 Vue d'ensemble</template>
      <template #content>
        <AnimationContainer legend="Ensemble du traitement Map/Reduce">
          <div class="flex flex-col gap-2">
            <Square color="bg-slate-8 text-white" text="Fic.1" />
            <Square color="bg-slate-8 text-white" text="Fic.2" />
            <Square color="bg-slate-8 text-white" text="Fic.3" />
          </div>
          <div class="flex flex-col gap-16 circles-bp">
            <Circle color="bg-slate-7 text-white" />
            <Circle color="bg-slate-7 text-white" />
            <Circle color="bg-slate-7 text-white" />
          </div>
          <div class="flex flex-col gap-2">
            <Square color="bg-red-2" text="M1" />
            <Square color="bg-blue-2" text="M2" />
            <Square color="bg-green-2" text="M3" />
          </div>
          <div class="flex flex-col gap-12 lines">
            <Line class="top-14 rotate-20" color="bg-red-2" />
            <Line class="top-26" color="bg-blue-2" />
            <Line class="top-40 -rotate-20" color="bg-green-2" />
          </div>
          <div class="flex flex-col gap-2 shuffle">
            <Square color="bg-amber-1" text="Shuffle & Sort" />
          </div>
          <div class="start-reducer">
            <Line color="bg-amber-1" />
          </div>
          <div class="flex flex-col gap-2 reducer">
            <Square color="bg-neutral-2" text="Reducer" />
          </div>
        </AnimationContainer>
        MapReduce est un modèle puissant pour traiter de grandes quantités de
        données de manière distribuée. Son implémentation est relativement
        simple et permet de facilement paralleliser des tâches.
      </template>
    </Paragraph>
  </div>
</template>