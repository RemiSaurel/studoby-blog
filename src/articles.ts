export const articles: Article[] = [
  {
    title: "Hadoop : MapReduce",
    component: "HadoopMapReduce",
    slug: "hadoop-map-reduce",
    tags: ["BigData", "Technique"],
    date: "22-06-2024",
    time: "4min",
    description: "Définition et fonctionnement de MapReduce",
  },
  {
    title: "Algo(s) du plus court chemin",
    component: "PlusCourtChemin",
    slug: "plus-court-chemin",
    tags: ["Algo", "Technique"],
    date: "07-07-2024",
    time: "3min",
    description: "Tour d'horizon des algorithmes de plus court chemin",
  }
];

export interface Article {
  title: string;
  component: string;
  slug: string;
  tags?: string[];
  date: string;
  time: string;
  description: string;
}
