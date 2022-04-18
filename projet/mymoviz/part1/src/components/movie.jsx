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
              <CardText className="card_text">
                  <p>Like</p>
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
                        <Button>-</Button>
                        <Button>+</Button>
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
              <CardText>{props.movieName}</CardText>
              <CardText>{props.movieDesc}</CardText>
            </CardBody>
          </Card>
      </CardGroup>


  );
}

export default Movie;
