export type CharmPosition = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotation?: string;
};

export type Necklace = {
  id: string;
  src: string;
  settings: CharmPosition[];
};
