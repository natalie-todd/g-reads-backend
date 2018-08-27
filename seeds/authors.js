
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tableOfBooks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tableOfBooks').insert([
        // {id: 1, colName: 'rowValue1'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'},
        {
          id: 1,
          author1FirstName: "Alex",
          author1LastName: "Martelli",
          author1Biography: "Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He's a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in G�teborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex's proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.",
          author1Portrait: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg",
          author2FirstName: "Anna",
          author2LastName: "Ravenscroft",
          author2Biography: "Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.",
          author2Portrait: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg",
          author3FirstName: "Steve",
          author3LastName: "Holden",
          author3Biography: "Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of \"Python Web Programming\", the O'Reilly School of Technology's \"Certificate series in Python\" and O'Reilly Media's \"Intermediate Python\" video series.",
          author3Portrait: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg"
        },
        {
          id: 2,
          author1FirstName: "Allen B.",
          author1LastName: "Downey",
          author1Biography: "Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master's and Bachelor's degrees from MIT.",
          author1Portrait: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg",
          author2FirstName: "",
          author2LastName: "",
          author2Biography: "",
          author2Portrait: "",
          author3FirstName: "",
          author3LastName: "",
          author3Biography: "",
          author3Portrait: ""
        },
        {
          id: 3,
          author1FirstName: "Bonnie",
          author1LastName: "Eisenman",
          author1Biography: "Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.",
          author1Portrait: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg",
          author2FirstName: "",
          author2LastName: "",
          author2Biography: "",
          author2Portrait: "",
          author3FirstName: "",
          author3LastName: "",
          author3Biography: "",
          author3Portrait: ""
        },
        {
          id: 4,
          author1FirstName: "Kyle",
          author1LastName: "Simpson",
          author1Biography: "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
          author1Portrait: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg",
          author2FirstName: "",
          author2LastName: "",
          author2Biography: "",
          author2Portrait: "",
          author3FirstName: "",
          author3LastName: "",
          author3Biography: "",
          author3Portrait: ""
        },
        {
          id: 5,
          author1FirstName: "Kyle",
          author1LastName: "Simpson",
          author1Biography: "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
          author1Portrait: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg",
          author2FirstName: "",
          author2LastName: "",
          author2Biography: "",
          author2Portrait: "",
          author3FirstName: "",
          author3LastName: "",
          author3Biography: "",
          author3Portrait: ""
        },
        {
          id: 6,
          author1FirstName: "Kyle",
          author1LastName: "Simpson",
          author1Biography: "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
          author1Portrait: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg",
          author2FirstName: "",
          author2LastName: "",
          author2Biography: "",
          author2Portrait: "",
          author3FirstName: "",
          author3LastName: "",
          author3Biography: "",
          author3Portrait: ""
        }
      ]);
    });
};
