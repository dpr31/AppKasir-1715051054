import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Header from './comp/header'


class PenjualanScreen extends Component {
    static navigationOptions = {
        headerLeft: null
    };


    constructor(props) {
        
        super(props);
        this.state = {
            kode: '',
            jumlah: '',
            harga: '',
            total: null,
            bayar: "",
            hargaBrg: '',
            kembalian: "",
        };
    }
    
    render() {
        return (
            <ScrollView>
                
                <Header judul={"Penjualan"} />
                <View style={styles.container}>
                    <View style={styles.box1}>
                        <Text>Kode Barang</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={TextInputText =>
                                this.setState({ kode: TextInputText })
                            }
                            ref={input => {
                                this.kode = input;
                            }}
                            onChange={this.cariData}
                            value={this.state.kode}
                        />
 
                    </View>
                    <View style={styles.box1}>
                        <Text>Jumlah Beli </Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={TextInputText =>
                                this.setState({ jumlah: TextInputText })
                            }
                            ref={input => {
                                this.jumlah = input;
                            }}
                        />
                    </View>
                    <View style={styles.box1}>
                        <Text>Harga Barang </Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={TextInputText =>
                                this.setState({ harga: TextInputText })
                            }
                            ref={input => {
                                this.harga = input;
                            }}
                        />
                           
                            
                    </View>
                    <View style={styles.box2}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.TouchableOpacityStyle}
                            onPress={() => this.setState({
                                total: ((this.state.harga * this.state.jumlah))
                              })}
                        >
                            <Text style={styles.TextClass}>Hitung</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Total Belanja : Rp. {this.state.total}</Text>

                            <View style={styles.box1}>
                                <Text>Uang Bayar</Text>
                                <TextInput
                                    style={styles.textInput}
                                    onChangeText={TextInputText =>
                                        this.setState({ bayar: TextInputText })
                                    }
                                    ref={input => {
                                        this.bayar = input;
                                    }}
                                />
                            </View>

                            <View style={styles.box2}>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={styles.TouchableOpacityStyle}
                                    onPress={() => this.setState({
                                        kembalian: ((this.state.bayar - this.state.total))
                                      })}
                                >
                                    <Text style={styles.TextClass}>Hitung</Text>
                                </TouchableOpacity>
                            </View>

                            <Text>Kembalian : Rp. {this.state.kembalian}</Text>

                </View>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        flexDirection: "column",
        alignItems: "center"
    },
    TextInputStyleClass: {
        backgroundColor: "#fff",
        borderWidth: 1,
        //height: '100%',
        borderColor: "#FF6633",
        borderRadius: 7,
        marginBottom: 10
        // width: "100%"
    },
    TextClass: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 20
    },
    TouchableOpacityStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF6633",
        marginTop: 20,
        marginBottom: 20,
        height: 50,
        width: 300,
        borderRadius: 7
    },
    
    box1: {
        flex: 0.5,
        width: "90%",
        paddingTop: 20,
        marginTop: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    box2: {
        flex: 0.4,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    textInput: {
        width: 170,
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#2196F3"
    },
    textInputKode: {
        width: 100,
        height: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
         marginLeft: 55,
        marginRight: 10,
        borderColor: "#2196F3"
    },
    conMain: {
        flex: 1,
        margin: 10,
        flexDirection: "column",
        alignItems: "center"
    },
    centerText: {
        fontSize: 20,
        color: '#000',
    },
 
});

//make this component available to the app
export default PenjualanScreen;