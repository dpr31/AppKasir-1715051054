import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MainMenuScreen from './mainMenu';
import PenjualanScreen from './Penjualan';
import TentangScreen from './tentang';
import BarangScreen from "./DataBarang";


const AppNavigator = createStackNavigator(
  {
    Menu: MainMenuScreen,
    Barang: BarangScreen,
    Penjualan: PenjualanScreen,
    Tentang: TentangScreen,
  },
  {
      initialRouteName: "Menu"
  }
);

export default createAppContainer(AppNavigator);