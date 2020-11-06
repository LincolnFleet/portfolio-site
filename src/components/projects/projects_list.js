// template project:
// {
//     title: '',
//     subtitle: '',
//     creators: [''],
//     date: '',
//     tags: [],
//     deployedLink: '',
//     video: {
//         URL: '',
//         title: ''
//     },
//     codeRepo: {
//         only: null,
//         front: null,
//         back: null,
//     },
//     description: ["",""],
// },

const js = 'JavaScript';
const react = 'React';
const redux = 'Redux';
const ruby = 'Ruby';
const ror = 'Ruby on Rails';
const gresql = 'PostgreSQL';


function ProjectsList() {
    return [

        {
            title: 'DeckCheck',
            subtitle: 'A deck building tool for the card game Magic: The Gathering',
            creators: ['Travis Martin'],
            date: '',
            tags: [js, react, redux, ruby, ror, gresql],
            deployedLink: 'http://www.google.com/',
            video: {
                URL:'https://www.google.com/',
                title:'DeckCheck Summary'
            },
            codeRepo: {
                front: 'https://github.com/LincolnFleet/DeckCheck_front',
                back: 'https://github.com/LincolnFleet/DeckCheck_back'
            },
            description: [
                "Magic: The Gathering is a card game produced by Wizards of the Coast LLC in which players construct decks from a massive library of unique cards to form a (sometimes) coherent strategy and compete with other players. Players must keep card 'mana' costs, offensive and defensive tactics, chance-to-draw and adherence to an overall strategy in mind while building their deck, and deck building tools have become a near necessity for many who enjoy the game's competitive and creative nature.",
                "DeckCheck is a tool that queries Wizards of the Coast's database of over 400,000 card objects and allows authenticated users to search for cards, build, save and modify decks. This was my final project at the Flatiron School and its basic functionality and layout were written in about two weeks. It is built on a Ruby on Rails backend, OAuth for user credentials verification and a PostgreSQL database to store users and their decks. Views are rendered using React and Redux for state management. Requests to the card database are passed to and made by the server, and the return data is normalized as it enters the front-end store."
            ],
        },


    ];
};

export default ProjectsList;