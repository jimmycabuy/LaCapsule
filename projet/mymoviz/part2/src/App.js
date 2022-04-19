import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Movie from "./components/movie.jsx";

function App() {
  var moviesData = [
    {
      name: "Star Wars : L'ascension de Skywalker",
      desc:
        "Un an a passé depuis que Kylo Ren a tué Snoke, le Leader suprême et pris sa place. Bien que largement décimée, la Résistance est prête à renaître de ses cendres. Rey, Poe, Leia et leurs alliés se préparent à reprendre le combat. Mais ils vont devoir faire face à un vieil ennemi : l'empereur Palpatine.",
      img: "../images/starwars.jpg",
      note: 6.7,
      vote: 5,
      vue: 2,
    },
    {
      name: "Maléfique : Le pouvoir du mal",
      desc:
        "La relation complexe d'Aurore et de Maléfique continue d'être explorée alors qu'elles doivent faire face à une nouvelle menace.",
      img: "../images/maleficent.jpg",
      note: 8.2,
      vote: 3,
      vue: 4,
    },
    {
      name: "Jumanji: The Next Level",
      desc:
        "Lorsque Spencer retourne dans le monde fantastique de Jumanji, ses amis Martha, Fridge et Bethany y retournent aussi pour le sauver mais le jeu est maintenant brisé. Tout ce qu'ils pensent savoir sur Jumanji est sur le point de changer car ils découvrent bientôt qu'il y a plus d'obstacles et plus de danger à surmonter.",
      img: "../images/jumanji.jpg",
      note: 4,
      vote: 5,
      vue: 1,
    },
    {
      name: "Once Upon a Time... in Hollywood",
      desc:
        "Rick Dalton, un acteur de télévision qui a déjà vécu de meilleures années, et son cascadeur de longue date Cliff Booth s'efforcent d'atteindre la gloire et le succès dans l'industrie cinématographique au cours de l'âge d'or d'Hollywood en 1969.",
      img: "../images/once_upon.jpg",
      note: 6,
      vote: 7,
      vue: 10,
    },
    {
      name: "La Reine des neiges 2",
      desc:
        "Elsa se demande pourquoi elle est née avec des pouvoirs magiques. La réponse menace son royaume. Avec Anna, Kristoff, Olaf et Sven, elle entreprendra un voyage dangereux, mais remarquable où elle ne pourra que souhaiter que ses pouvoirs soient assez puissants.",
      img: "../images/frozen.jpg",
      note: 4.6,
      vote: 3,
      vue: 7,
    },
    {
      name: "Terminator: Dark Fate",
      desc:
        "De nos jours à Mexico. Dani Ramos, 21 ans, travaille sur une chaîne de montage dans une usine automobile.",
      img: "../images/terminator.jpg",
      note: 6.1,
      vote: 1,
      vue: 11,
    },
  ];
  var moviesList = [];
  for (var i = 0; i < moviesData.length; i++) {
    moviesList.push(
      <Movie
        movieName={moviesData[i].name}
        movieDesc={moviesData[i].desc}
        movieImg={moviesData[i].img}
        globalRating={moviesData[i].note}
        globalCountRating={moviesData[i].vote}
        movieView={moviesData[i].vue}
      />
    );
  }
  return (
    <div>
      <main>
        <div className="container">
          <div className="row">
            <div>
              <Navbar />
            </div>
            {moviesList}
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;