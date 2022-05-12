import { View, ScrollView, Image } from 'react-native';
import { Text, Card, Badge } from 'react-native-elements'
import React from 'react'
import { connect } from 'react-redux';

function GalleryScreen(props) {

    var photoList = props.photo.map((image, i)=>{
        
        return  <Card key={i}>
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

function mapStateToProps(state){
    return{
        photo: state.photo
    }
  }
  
export default connect(mapStateToProps, null)
(GalleryScreen);