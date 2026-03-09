import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const creatorId = "a22e6dd9-d82a-469d-8143-693aea32584a";

const movies = [
  {
    title: "The Godfather",
    overview:
      "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
    releaseYear: 1972,
    genres: ["Crime", "Drama"],
    runtime: 175,
    posterUrl: "https://example.com/godfather.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Dark Knight",
    overview:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl: "https://example.com/darkknight.jpg",
    createdBy: creatorId,
  },
  {
    title: "Pulp Fiction",
    overview:
      "The lives of two mob hitmen, a boxer, and others intertwine in four tales of violence.",
    releaseYear: 1994,
    genres: ["Crime", "Drama"],
    runtime: 154,
    posterUrl: "https://example.com/pulpfiction.jpg",
    createdBy: creatorId,
  },
  {
    title: "Inception",
    overview:
      "A skilled thief steals secrets from deep within the subconscious using dream-sharing technology.",
    releaseYear: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    runtime: 148,
    posterUrl: "https://example.com/inception.jpg",
    createdBy: creatorId,
  },
  {
    title: "Fight Club",
    overview:
      "An insomniac office worker and a soap salesman create an underground fight club.",
    releaseYear: 1999,
    genres: ["Drama"],
    runtime: 139,
    posterUrl: "https://example.com/fightclub.jpg",
    createdBy: creatorId,
  },
  {
    title: "Interstellar",
    overview:
      "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseYear: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169,
    posterUrl: "https://example.com/interstellar.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Matrix",
    overview:
      "A hacker discovers that reality is a simulation and joins a rebellion against machines.",
    releaseYear: 1999,
    genres: ["Action", "Sci-Fi"],
    runtime: 136,
    posterUrl: "https://example.com/matrix.jpg",
    createdBy: creatorId,
  },
  {
    title: "Gladiator",
    overview:
      "A Roman general seeks revenge against the corrupt emperor who murdered his family.",
    releaseYear: 2000,
    genres: ["Action", "Adventure", "Drama"],
    runtime: 155,
    posterUrl: "https://example.com/gladiator.jpg",
    createdBy: creatorId,
  },
  {
    title: "Titanic",
    overview:
      "A young couple from different social classes fall in love aboard the ill-fated ship.",
    releaseYear: 1997,
    genres: ["Drama", "Romance"],
    runtime: 195,
    posterUrl: "https://example.com/titanic.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men bond over several years, finding solace and redemption.",
    releaseYear: 1994,
    genres: ["Drama"],
    runtime: 142,
    posterUrl: "https://example.com/shawshank.jpg",
    createdBy: creatorId,
  },
];

const main = async () => {
  console.log("Seeding movies");

  for (const movie of movies) {
    await prisma.movie.create({
      data: movie,
    });
    console.log("Created movie", movie.title);
  }

  console.log("The seeding completed");
};

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
