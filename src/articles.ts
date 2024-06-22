export const articles: Article[] = [
  {
    title: "Hadoop : MapReduce",
    component: "HadoopMapReduce",
    slug: "hadoop-map-reduce",
    tags: ["bigdata", "technique"],
    date: "22-06-2024",
    time: "4min",
    description: "Définition et fonctionnement de MapReduce",
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
