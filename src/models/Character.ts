interface IOrigin {
  name: string;
  url: string;
}

export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: IOrigin,
  location: IOrigin,
  image: string,
}
