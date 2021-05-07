export interface ItemProps {
  slug: string;
  title: string;
  items: CharProps[];
}

export interface CharacteristicsProps {
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
}

export interface AbilitiesProps {
  force: number;
  intelligence: number;
  agility: number;
  endurance: number;
  velocity: number;
}

export interface CharProps {
  name: string;
  alterEgo: string;
  imageUri: string;
  biography: string;
  caracteristics: CharacteristicsProps;
  abilities: AbilitiesProps;
  movies: string[];
}
