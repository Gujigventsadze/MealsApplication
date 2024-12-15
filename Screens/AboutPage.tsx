import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import RecipeBox from "../Components/RecipeBox";
import { useEffect } from "react";
import MealData from "../Data/MealData";

const AboutPage = () => {
  const favoriteDishes = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const filteredDishes = MealData.flatMap((region) =>
    region.dishes.filter((dish) => favoriteDishes.includes(dish.name))
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        {filteredDishes.length > 0 ? (
          filteredDishes.map((item, index) => (
            <RecipeBox
              key={index}
              difficulty={item.difficulty}
              time_to_cook={item.time_to_cook}
              title={item.name}
              ingredients={item.ingredients}
              instructions={item.cooking_instructions}
            />
          ))
        ) : (
          <Text style={styles.noText}>No favorite dishes available</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  noText: {
    textAlign: "center",
    marginVertical: 35,
    fontSize: 25,
    fontWeight: "bold",
  },
});
