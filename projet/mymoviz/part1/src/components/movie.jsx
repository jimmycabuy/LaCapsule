import "../stylesheet/movie.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Button,
  Badge,
  ButtonGroup,
  CardGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Movie(props) {
  return (

      <CardGroup className="card_movie col-xs-12 col-lg-6 col-xl-4">
          <Card>
            <CardImg
              alt={props.movieName}
              src={props.movieImg}
              top
              width="100%"
            />
            <CardBody>
              <CardText>
              <h5 className="movie_title">{props.movieName}</h5>
              </CardText>
              <CardText className="card_text">
                  <p>Favoris</p>
                  <p className="heart"><FontAwesomeIcon icon={faHeart} /></p>
              </CardText>
              <CardText className="card_text">
                <p>Nombres de vues</p>
                <p><FontAwesomeIcon icon={faVideo} /></p>
                <p><Badge color="secondary">{props.movieView}</Badge></p>
              </CardText>
              <CardText className="card_text">
                  <p>Avis</p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p>({props.globalCountRating})</p>
                  <p>
                    <ButtonGroup>
                        <Button color="secondary">-</Button>
                        <Button color="secondary">+</Button>
                    </ButtonGroup></p>
              </CardText>
              <CardText className="card_text">
                  <p>Moyenne</p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p>({props.globalRating})</p>
              </CardText>
              <CardText> <p className="synopsis">Synopsis:</p>{props.movieDesc}</CardText>
            </CardBody>
          </Card>
      </CardGroup>


  );
}

export default Movie;
