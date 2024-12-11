import { StyleSheet } from "react-native";
import React from "react";
import CountryBox from "../Components/CountryBox";
import { ScrollView } from "react-native-gesture-handler";
import MealData from "../Data/MealData";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      {MealData.map((item, index) => (
        <CountryBox key={index} country={item.name} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {},
});
