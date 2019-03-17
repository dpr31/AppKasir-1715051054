import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import Header from './comp/header';
import Footer from './comp/footer';
const profile = require('./aku.jpg');

class TentangScreen extends Component {
    static navigationOptions = {
        headerLeft: null
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Header judul={"Tentang Kami"} />
                <View style={styles.bioContainer}>
                <View style={styles.photoContainer}>
                    <Image source={profile}
                    style={styles.photo}/>
                    </View>
                    <View style={styles.detailContainer}>
                        <Text style={styles.textBio}>Nama : Dwi Pranata</Text>
                        <Text style={styles.textBio}>NIM : 1715051054</Text>
                        <Text style={styles.textBio}>Skills : Progamer </Text>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bioContainer : {
        flex: 0.5,
        flexDirection: 'row',
        marginTop: 25,
    },
    photoContainer : {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailContainer : {
        flex: 0.6,
        justifyContent: 'center'
    },
    photo:{
        width: '75%',
        height: '50%',
        backgroundColor: '#FF6633',
        borderRadius: 10,
    },
    textBio:{
        fontSize: 20
    }



    
});

//make this component available to the app
export default TentangScreen;