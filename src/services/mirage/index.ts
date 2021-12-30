import { createServer, Model, hasMany, belongsTo } from "miragejs";
import { ModelDefinition, Registry } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import { Server } from "miragejs/server";
import { CityModel, ContinentModel } from "./models";
import { continents } from "./mocks";

type AppRegistry = Registry<
  { continent: typeof ContinentModel; city: typeof CityModel },
  {}
>;
type AppSchema = Schema<AppRegistry>;

export function makeServer() {
  const server = createServer({
    models: {
      continent: ContinentModel,
      city: CityModel,
    },
    seeds(server: Server<AppRegistry>) {
      continents.forEach((item) => {
        const continent = server.create("continent", item);
        item.cities?.forEach((item) => {
          server.create("city", {
            ...item,
            continent,
          });
        });
      });
    },
    routes() {
      this.namespace = "api";

      this.get("/continents", (schema: AppSchema, req) => {
        return schema.all("continent");
      });

      this.get("/continents/:uuid", (schema: AppSchema, req) => {
        const uuid = req.params.uuid;
        return schema.findBy("continent", { uuid });
      });

      this.get("/cities", (schema: AppSchema, req) => {
        return schema.all("city");
      });

      this.get("/cities/:continentId", (schema: AppSchema, req) => {
        const id = req.params.continentId;
        const continent = schema.findBy("continent", { id: id });

        const cities = continent?.cityIds.map((id) =>
          schema.where("city", { id: id })
        );

        return cities || null;
      });

      this.passthrough();
      this.passthrough("http://localhost:3000/**");
      this.passthrough("/_next/static/development/_devPagesManifest.json");
    },
  });

  return server;
}
