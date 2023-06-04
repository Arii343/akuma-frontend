export interface AnimeStructure {
  id: string;
  englishTitle: string;
  image: string;
}

export interface AnimeStateStructure {
  animes: AnimeStructure[];
}
