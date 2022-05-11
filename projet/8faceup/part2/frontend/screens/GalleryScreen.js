import { View, ScrollView, Image } from 'react-native';
import { Text, Card, Badge } from 'react-native-elements'
import React from 'react'

export default function GalleryScreen() {
  return (
    <View style={{flex:1, paddingTop:50, backgroundColor:"#FFF"}}>
        <ScrollView>
            <Text style={{fontSize: 30, textAlign:'center', fontWeight: '600', paddingTop:10}}>Jimmy's Gallery</Text>
            <Card>
                <Image source={require('../assets/picture-1.jpg')} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Homme</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>70 ans</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Barbe</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Heureux</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Cheveux Gris</Text>}/>
            </Card>
            <Card>
                <Image source={require('../assets/picture-2.jpg')} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Femme</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>31 ans</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Lunette</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Heureux</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Cheveux Chatain</Text>}/>
            </Card>
            <Card>
                <Image source={require('../assets/picture-3.jpg')} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Homme</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>20 ans</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Lunette</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Pensif</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Cheveux Noir</Text>}/>
            </Card>
            <Card>
                <Image source={require('../assets/picture-4.jpg')} style={{ width:'100%', height:250, marginBottom:20, marginTop:0}}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Femme</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>50 ans</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Lunette</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Heureux</Text>}/>
                <Badge status="success" value={<Text style={{color:"white", width:150, textAlign:'center'}}>Cheveux Gris</Text>}/>
            </Card>
        </ScrollView>
    </View>
  )
}