export const articles: Article[] = [
  {
    title: "Hadoop : MapReduce",
    component: "HadoopMapReduce",
    slug: "hadoop-map-reduce",
    tags: ["bigdata", "technique"],
  },
];

export interface Article {
  title: string;
  component: string;
  slug: string;
  tags?: string[];
}
