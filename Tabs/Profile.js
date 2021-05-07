import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';



function UserCard (){
    return(
        <View style={styles.cardContainer}>
            <Image source={{uri: 'https://eusp.org/sites/default/files/styles/profile_photo_full/public/photo/web-vy_gelman.1.jpg?itok=rXkqYYxS'}}
       style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.cardText}>Name: Eve</Text>
                <Text style={styles.cardText}>Email: Wawdawd@wdawd.awd</Text>
            </View>
        </View>
    )
}

function MyButton({ text }) {
    return(
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function Profile ({navigation}) {

    return (
        <View style={styles.container}>
           <UserCard></UserCard>
           <View style={styles.buttonContainer}>
                <MyButton text='Change theme to: light' />
                <MyButton text='Logout' />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#3a474e',
        paddingVertical: 20,
    },
    cardContainer:{
        backgroundColor: '#65727a',
        width: 320,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        padding: 15,
        flexDirection: 'row'
    },
    image:{
        width: 70,
        height:70,
        borderRadius:35,
    },
    textContainer:{
        alignSelf: 'center',
    },
    cardText:{
        color: 'white',
        fontSize: 14,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    button: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#4094a3',
    },
})