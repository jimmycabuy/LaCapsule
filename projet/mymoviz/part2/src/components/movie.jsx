import "../stylesheet/movie.css";
import React, {useState} from "react";
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

  const [likeMovie, setLikeMovie] = useState(false);
  const [watchMovie, setWatchMovie] = useState(false);
  const [countWatchMovie, setCountWatchMovie] = useState(0);

  var heartClick = () => {
    if(likeMovie === true){
      setLikeMovie(false);
    } else{
      setLikeMovie(true);
    }
  }

  var cameraClick = () => {
      setWatchMovie(true);
      setCountWatchMovie(countWatchMovie+1);
  }

  var heartColor ;
  var cameraColor ;

  if(likeMovie){
    heartColor = { color : "#FD5D5D" };
  } 
  
  if(watchMovie){
    cameraColor = { color : "#FD5D5D" };
  }

  return (
      <CardGroup className="card_movie col-12 col-lg-6 col-xl-4">
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
                  <p onClick={ () => heartClick() } style={heartColor} className="heart" ><FontAwesomeIcon icon={faHeart} /></p>
              </CardText>
              <CardText className="card_text">
                <p>Nombres de vues</p>
                <p onClick={ () => cameraClick() } style={cameraColor} className="camera" ><FontAwesomeIcon icon={faVideo} /></p>
                <p><Badge color="secondary"><span>{ countWatchMovie }</span></Badge></p>
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
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p>({props.globalCountRating}/10)</p>
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
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p className="star"><FontAwesomeIcon icon={faStar}/></p>
                  <p>({props.globalRating}/10)</p>
              </CardText>
              <CardText> <p className="synopsis">Synopsis:</p>{props.movieDesc}</CardText>
            </CardBody>
          </Card>
      </CardGroup>
  );
}

export default Movie;