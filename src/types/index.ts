export interface ItemProps {
    slug: string;
    title: string;
    items: CharProps[];
}

export interface CharProps {
    name: string;
    alterEgo: string;
    imagePath: string;
    biography: string;
    caracteristics: {
      birth: string;
      weight: {
        value: number;
        unity: string;
      };
      height: {
        value: number;
        unity: string;
      };
      universe: string;
    };
    abilities: {
      force: number;
      intelligence: number;
      agility: number;
      endurance: number;
      velocity: number;
    };
    movies: string[];
}