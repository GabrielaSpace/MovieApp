// const getMovies = require("../controllers/moviesMongoController");
const getMovies = require("../controllers/moviesMongoController");

describe("getMovies", () => {
    test("Returns status 200 and movies when movies are found", async () => {
      const mockMovies = [      {        title: "Titanic",        year: "2002",        genre: "Drama",        runtime: "120min",        director: "Josh Smith",        actors: "Julia Roberts, Brad Pitt",        Plot: "This film is based on real facts",      },      {        title: "Avatar",        year: "2002",        genre: "Adventure",        runtime: "180min",        director: "John Smith",        actors: "Julia Roberts, Brad Pitt",        Plot: "This film is based on real facts",      },    ];
      const mockFind = jest.fn().mockResolvedValue(mockMovies);
      const mockMoviesModel = {
        find: mockFind,
      };
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        render: jest.fn(),
      };
      await getMovies({}, mockResponse, mockMoviesModel);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.render).toHaveBeenCalledWith("moviesAdmin", {
        allMovies: mockMovies,
      });
    });
  
    test("Returns status 400 and error message when an error occurs", async () => {
      const mockFind = jest
        .fn()
        .mockRejectedValue(new Error("Something went wrong"));
      const mockMoviesModel = {
        find: mockFind,
      };
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      await getMovies({}, mockResponse, mockMoviesModel);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        msj: "Something went wrong",
      });
    });
  });