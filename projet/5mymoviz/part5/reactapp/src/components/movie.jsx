import "../stylesheet/movie.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Badge,
  CardGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Movie(props) {
  // const [likeMovie, setLikeMovie] = useState(false);

  const [watchMovie, setWatchMovie] = useState(false);
  const [countWatchMovie, setCountWatchMovie] = useState(0);
  let [myRatingMovie, setMyRatingMovie] = useState(0);

  var heartClick = () => {
    if (props.likeMovie === true) {
      // setLikeMovie(false);
      props.handleClickRemoveMovieParent(props.movieName, props.movieImg);
    } else {
      // setLikeMovie(true);
      props.handleClickAddMovieParent(props.movieName, props.movieImg);
    }
  };

  var cameraClick = () => {
    setWatchMovie(true);
    setCountWatchMovie(countWatchMovie + 1);
  };

  var starClickPlus = () => {
    if (myRatingMovie < 10) {
      setMyRatingMovie(myRatingMovie + 1);
    }
  };

  var starClickMoins = () => {
    if (myRatingMovie > 0) {
      setMyRatingMovie(myRatingMovie - 1);
    }
  };

  let handleStarClick = (counter) => {
    setMyRatingMovie((myRatingMovie = counter + 1));
  };

  var starAvis = [];
  for (var i = 0; i < 10; i++) {
    let counter = i;
    if (i < myRatingMovie) {
      starAvis.push(
        <p className="star">
          <FontAwesomeIcon
            onClick={() => handleStarClick(counter)}
            style={{ color: "#FFD36E" }}
            icon={faStar}
          />
        </p>
      );
    } else {
      starAvis.push(
        <p className="star">
          <FontAwesomeIcon
            onClick={() => handleStarClick(counter)}
            icon={faStar}
          />
        </p>
      );
    }
  }

  var heartColor;
  var cameraColor;

  if (props.likeMovie) {
    heartColor = { color: "#FD5D5D" };
  }

  if (watchMovie) {
    cameraColor = { color: "#FD5D5D" };
  }

  var globalRating2 = props.globalRating;
  var globalCountRating2 = props.globalCountRating;

  var moyenneFinale = 0;
  if (myRatingMovie === 0) {
    moyenneFinale = globalRating2;
  } else {
    moyenneFinale =
      (globalRating2 * globalCountRating2 + myRatingMovie) /
      (globalCountRating2 + 1);
    globalCountRating2 += 1;
  }
  var moyenneArrondi = Math.round(moyenneFinale);

  var starMoyenne = [];
  for (var j = 0; j < 10; j++) {
    if (j < moyenneArrondi) {
      starMoyenne.push(
        <p>
          <FontAwesomeIcon style={{ color: "#FFD36E" }} icon={faStar} />
        </p>
      );
    } else {
      starMoyenne.push(
        <p>
          <FontAwesomeIcon icon={faStar} />
        </p>
      );
    }
  }

  // var handleClickAddMovie = () => {
  //   props.handleClickAddMovieParent();
  // }

  return (
    <CardGroup className="card_movie col-12 col-lg-6 col-xl-4">
      <Card>
        <CardImg alt={props.movieName} src={props.movieImg} top width="100%" />
        <CardBody>
          <CardText>
            <h5 className="movie_title">{props.movieName}</h5>
          </CardText>
          <CardText className="card_text">
            <p>Favoris</p>
            <p
              onClick={() => heartClick()}
              style={heartColor}
              className="heart"
            >
              <FontAwesomeIcon icon={faHeart} />
            </p>
          </CardText>
          <CardText className="card_text">
            <p>Nombres de vues</p>
            <p
              onClick={() => cameraClick()}
              style={cameraColor}
              className="camera"
            >
              <FontAwesomeIcon icon={faVideo} />
            </p>
            <p>
              <Badge color="secondary">
                <span>{countWatchMovie}</span>
              </Badge>
            </p>
          </CardText>
          <CardText className="card_text">
            <p>Avis</p>
            {starAvis}
            {/* <p>(<span>{ myRatingMovie }</span>)</p> */}
            <p>
              <Badge
                onClick={() => starClickMoins()}
                color="secondary"
                className="badge_avis"
              >
                -
              </Badge>
              <Badge
                onClick={() => starClickPlus()}
                color="secondary"
                className="badge_avis"
              >
                +
              </Badge>
            </p>
          </CardText>
          <CardText className="card_text">
            <p>Moyenne</p>
            {starMoyenne}
            <p>({globalCountRating2} votes)</p>
          </CardText>
          <CardText>
            {" "}
            <p className="synopsis">Synopsis:</p>
            {props.movieDesc}
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
}

export default Movie;