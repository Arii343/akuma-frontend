export interface AnimeDataStructure {
  englishTitle: string;
  japaneseTitle: string;
  releaseYear: number;
  rating: string;
  demographics: string[];
  genres: string[];
  image: string;
  score: number;
  rank: number;
  popularity: number;
  type: string;
  source: string;
  episodes: number;
  status: string;
  duration: string;
  synopsis: string;
}

export interface AnimeStructure extends AnimeDataStructure {
  id: string;
}

export interface AnimeStateStructure {
  animes: AnimeStructure[];
}
