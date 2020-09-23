import React from 'react';
import { StyleSheet, Text, View ,Image, Linking,Platform} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import {Title, Card, Button} from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Profile = (props)=>{

    const {id, name, picture, phone, salary,email, position} = props.route.params.item
    const openDial=()=>{
        if(Platform.OS==="android"){
            Linking.openURL("tel:7000869565")

        }
        else{
            Linking.openURL("telpromt:7000869565")

        }

    }

return (
    <View style={styles.root}>
        <LinearGradient
        colors={["#0033ff","#6bc1ff"]}
        style={{height:"20%"}}
        />
        <View style={{alignItems:"center"}}>
        <Image
        style={{width:140, height:140, borderRadius:70, marginTop:-50}}
        source={{uri:picture}}
        />
        </View>

        <View style={{alignItems:"center", margin:10}}>
<Title> {name}</Title>
            <Text style={{fontSize:18}}> {position} </Text>
        </View>

        <Card style={styles.myCard} onPress={()=>
        Linking.openURL("mailto:mahakmandlecha04@gmail.com")
        }>
             <View style={styles.cardContent}>
            <MaterialIcons name="email" size={32} color="#006aff" />
            <Text style={styles.mytext}> {email} </Text>

            </View>
        </Card>

        <Card style={styles.myCard} onPress={()=>openDial()}>
            <View style={styles.cardContent}>
            <Entypo name="phone" size={32} color="#006aff" />
            <Text style={styles.mytext}> {phone} </Text>

            </View>
        </Card>

        <Card style={styles.myCard}>
            <View style={styles.cardContent}>
            <MaterialIcons name="attach-money" size={32} color="#006aff" />
            <Text style={styles.mytext}> {salary} </Text>

            </View>
        </Card>
        <View style={{flexDirection:"row",padding:10, justifyContent:"space-around"}}>
        <Button icon="account-edit"
         mode="contained" 
         theme={theme}
         onPress={() => console.log('Pressed')}>
   Edit
  </Button>
  <Button icon="delete"
         mode="contained" 
         theme={theme}
         onPress={() => console.log('Pressed')}>
    Fire Employee
  </Button>
        </View>


    </View>
)

}


const theme = {
    colors:{
        primary: "#006aff"
    }
}


const styles = StyleSheet.create({
    root:{
        flex:1
    },
    myCard:{
        margin:3
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})

export default Profile