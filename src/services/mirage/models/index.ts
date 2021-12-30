import { Model, hasMany, belongsTo } from "miragejs";
import { ModelDefinition } from "miragejs/-types";

export type City = {
  name: string;
  country: string;
  images: {
    main: string;
    flag: string;
  };
  continent: Continent;
};

export type Continent = {
  uuid: string;
  name: string;
  statistics: {
    cities: number;
    countries: number;
    languages: number;
  };
  description: string;
  full_description: string;
  images: {
    banner: string;
    slider: string;
  };
  cityIds: string[];
  cities?: Omit<City, "continent">[];
};

export const CityModel: ModelDefinition<City> = Model.extend({
  continent: belongsTo(),
});

export const ContinentModel: ModelDefinition<Omit<Continent, "cities">> =
  Model.extend({
    city: hasMany(),
  });
