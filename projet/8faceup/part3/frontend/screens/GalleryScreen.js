import { View, ScrollView, Image } from 'react-native';
import { Text, Card, Badge } from 'react-native-elements'
import React from 'react'
import { connect } from 'react-redux';

function GalleryScreen(props) {
    // console.log(props.photo);
    var photoList = props.photo.map((image, i)=>{
        // console.log(image.url)
        
        return  <Card key={i}>
                    <Card.Image source={{uri: image.url}} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
                    <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Homme</Text>}/>
                    <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>70 ans</Text>}/>
                    <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Barbe</Text>}/>
                    <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Heureux</Text>}/>
                    <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Cheveux Gris</Text>}/>
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