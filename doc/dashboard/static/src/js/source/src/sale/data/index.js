import { createServer } from "miragejs";

createServer({
  routes() {
    this.get("/movies", () => {
      return {
        movies: [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ],
      };
    });
    //允许当前域上未处理的请求通过
    this.passthrough();
  },
});
