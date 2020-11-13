import { TAGS, TRAVIS_MARTIN } from "../../constants.js";

// project Object shape:
// {
//     title: string,
//     subtitle: string,
//     creators: [string,],
//     date: string,
//     tags: [string,],
//     deployedLink: string,
//     video: {
//         URL: string,
//         title: string
//     },
//     codeRepo: {
//         only: string,
//         front: string,
//         back: string,
//     },
//     description: [string,],
// },

const PROJECTS_LIST = [
  {
    title: "DeckCheck",
    subtitle: "A deck building tool for the card game Magic: The Gathering",
    creators: [TRAVIS_MARTIN.join(" ")],
    date: "",
    tags: [
      TAGS.js,
      TAGS.react,
      TAGS.redux,
      TAGS.ruby,
      TAGS.ror,
      TAGS.gresql,
      TAGS.oauth,
    ],
    deployedLink: "http://www.google.com/",
    video: {
      URL: "",
      title: "DeckCheck Summary",
    },
    codeRepo: {
      front: "https://github.com/LincolnFleet/DeckCheck_front",
      back: "https://github.com/LincolnFleet/DeckCheck_back",
    },
    description: [
      "Magic: The Gathering is a card game produced by Wizards of the Coast LLC in which players construct decks from a massive library of unique cards to form a (sometimes) coherent strategy and compete with other players.",
      "DeckCheck is a tool that queries Wizards of the Coast's database of over 400,000 card objects and allows authenticated users to search for cards, build, save and modify decks. This was my final project at the Flatiron School and its basic functionality and layout were written in less than two weeks. It is built using a React+Redux frontend, a Ruby on Rails backend, OAuth for user credentials verification and a PostgreSQL database to store users and their decks. Requests to the card database are made by the server while data normalization is handled by the client.",
    ],
  },
];

export default PROJECTS_LIST;
