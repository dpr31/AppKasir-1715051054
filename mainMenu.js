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
const logo = require('./logo.png');

class MainMenuScreen extends Component {
    static navigationOptions = {
        headerLeft: null
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Header judul={"APP KASIR"} />
                <View style={{flex: 0.4, alignItems: 'center',
                justifyContent: 'center'}}>
                <Image source={logo}
                style={styles.gambarContainer} />
                </View>
                <View style={styles.buttomContainer}>
                    <View style={styles.doubleButtom}>
                        <View style={{flex: 0.5,alignItems: 'center', justifyContent: 'center',}}>
                           
                            <TouchableOpacity style={styles.Buttom} activeOpacity={0.5} 
                             onPress={() => this.props.navigation.navigate('Penjualan')}
                            >
                                <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Penjualan</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 0.5,alignItems: 'center', justifyContent: 'center',}}>
                            <TouchableOpacity style={styles.Buttom} activeOpacity={0.5}
                             onPress={() => this.props.navigation.navigate('Barang')}
                            >
                                <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Data Barang</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.singleButtom}>
                       <TouchableOpacity style={styles.Buttom} activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate('Tentang')}
                       >
                            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Tentang</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer/>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    },
    gambarContainer:{
        flex: 2,
        width: '100%',
        backgroundColor: '#FF6633',
       marginBottom: 17,
    },
    buttomContainer:{
        flex: 0.6,
        marginBottom: 50,
    },
    doubleButtom:{
        flex: 0.5,
        flexDirection: 'row',
    },
    singleButtom:{
        flex:0.5,
        justifyContent:'center',
        alignItems: 'center',
    },
    Buttom:{
        width: '90%',
        height: 75,
        backgroundColor: '#FF6633',
        color: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//make this component available to the app
export default MainMenuScreen;