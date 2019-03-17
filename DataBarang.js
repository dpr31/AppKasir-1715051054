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


class BarangScreen extends Component {
    static navigationOptions = {
        headerLeft: null
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Header judul={"Data Barang"} />
                <View style={styles.BarangContainer}>
                    <Text style={styles.textKode}>Kode : 001</Text>
                    <Text style={styles.textNamaBarang}>Nama : Mie Mantap Gila </Text>
                </View>

                <View style={styles.BarangContainer}>
                    <Text style={styles.textKode}>Kode : 002</Text>
                    <Text style={styles.textNamaBarang}>Nama : Sabun Kayu Batu</Text>
                </View>

                <View style={styles.BarangContainer}>
                    <Text style={styles.textKode}>Kode : 003</Text>
                    <Text style={styles.textNamaBarang}>Nama : Pop mie Pedas Gila</Text>
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
    BarangContainer:{
        width: '90%',
        justifyContent: 'center',
        backgroundColor: '#FF6633',
        margin: 5,
        marginLeft: 20,
        height: 100
    },
    textKode: {
        fontSize: 18,
        color: '#fff'
    },
    textNamaBarang:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    }


    
});

//make this component available to the app
export default BarangScreen;