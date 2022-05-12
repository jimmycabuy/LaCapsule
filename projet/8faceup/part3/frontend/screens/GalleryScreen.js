import { View, ScrollView, Image } from 'react-native';
import { Text, Card, Badge } from 'react-native-elements'
import React from 'react'
import { connect } from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';

function GalleryScreen(props) {

    var photoList = props.photo.map((image, i)=>{
        
        return  <Card key={i}>
                    <View style={{flex:1, flexDirection:"row", justifyContent:'space-between'}}>
                        <Card.Title style={{marginTop:6}}>Picture taken by : {props.pseudo}</Card.Title>
                        <IonIcon  name="close-outline" size={30} color="black"
                        onPress={() => props.deleteImage(image)}
                        />
                    </View>
                    <Card.Image source={{uri: image.resultCloudinary.url}} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
                    <Badge status={(image.gender === "No face detected") ? "error" : "success"} value={<Text style={{color:"white", width:150, textAlign:'center'}}>{image.gender}</Text>}/>
                    <Badge status={(image.age === "No age detected") ? "error" : "success"} value={<Text style={{color:"white", width:150, textAlign:'center'}}>{image.age}</Text>}/>
                </Card>
      });
  return (
    <View style={{flex:1, paddingTop:50, backgroundColor:"#FFF"}}>
        <ScrollView>
            <Text style={{fontSize: 30, textAlign:'center', fontWeight: '600', paddingTop:10}}>Jimmy's Gallery</Text>
            {photoList}
        </ScrollView>
    </View>
  )
}

function mapDispatchToProps(dispatch){
    return {
      deleteImage: function(photo){
        dispatch ({type: "removePhoto", photo: photo})
      }
    }
  }

function mapStateToProps(state){
    return{
        photo: state.photo,
        pseudo: state.pseudo
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)
(GalleryScreen);