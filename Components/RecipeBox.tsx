import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import RootStackParamList from "../Types/NavigationTypes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface RecipeBoxProps {
  title: string;
  time_to_cook: string;
  difficulty: string;
  instructions: string[];
  ingredients: string[];
}
type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "RecipePage"
>;

const RecipeBox: React.FC<RecipeBoxProps> = ({
  title,
  time_to_cook,
  difficulty,
  instructions,
  ingredients,
}) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.mainContainer,
        pressed && styles.pressedStyle,
      ]}
      onPress={() =>
        navigation.navigate("RecipePage", {
          allData: {
            title: title,
            time: time_to_cook,
            difficulty: difficulty,
            instructions: instructions,
            ingredients: ingredients,
          },
        })
      }
    >
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.secondaryContainer}>
        <View style={styles.cookTime}>
          <Icon name="clock" size={20} color="black" />
          <Text>{time_to_cook}</Text>
        </View>
        <Text>Difficulty: {difficulty}</Text>
      </View>
    </Pressable>
  );
};

export default RecipeBox;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  secondaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  cookTime: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  pressedStyle: {
    opacity: 0.7,
  },
});
