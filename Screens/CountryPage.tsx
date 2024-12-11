import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RecipeBox from "../Components/RecipeBox";
import MealData from "../Data/MealData";

interface CountryPageProps {
  route: any;
  navigation: any;
}
interface MealProps {
  name: string;
  ingredients: string[];
  cooking_instructions: string[];
  time_to_cook: string;
  difficulty: string;
}

const CountryPage: React.FC<CountryPageProps> = ({ route, navigation }) => {
  const { country } = route.params;
  const [mealData, setMealData] = useState<MealProps[]>([]);

  useEffect(() => {
    navigation.setOptions({ title: country });

    const selectedCountry = MealData.find((item) => item.name === country);

    if (selectedCountry) setMealData(selectedCountry.dishes);
  }, [navigation, country]);

  return (
    <View>
      {mealData.map((item, index) => (
        <RecipeBox
          key={index}
          difficulty={item.difficulty}
          time_to_cook={item.time_to_cook}
          title={item.name}
          ingredients={item.ingredients}
          instructions={item.cooking_instructions}
        />
      ))}
    </View>
  );
};

export default CountryPage;

const styles = StyleSheet.create({});
