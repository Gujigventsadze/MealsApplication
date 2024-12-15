import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { addFavorite, removeFavorite } from "../Redux/FavoriteSlice";

interface RecipePageProps {
  route: any;
  navigation: any;
}

const RecipePage: React.FC<RecipePageProps> = ({ route, navigation }) => {
  const { allData } = route.params;

  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.favorites.favorites);

  const isFavorite = selector.includes(allData.title);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(allData.title));
    } else {
      dispatch(addFavorite(allData.title));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: allData.title,
      headerRight: () => (
        <Pressable onPress={handleClick}>
          <Ionicons
            name={isFavorite ? "star" : "star-outline"}
            size={30}
            style={{ marginRight: 20 }}
          />
        </Pressable>
      ),
    });
  }, [navigation, isFavorite, allData, dispatch]);

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>{allData.title}</Text>
      <View style={styles.clockContainer}>
        <View style={styles.clock}>
          <Icon name="clock" size={20} />
          <Text style={styles.headText}>{allData.time}</Text>
        </View>
        <Text style={styles.headText}>Difficulty: {allData.difficulty}</Text>
      </View>
      <Text style={styles.ingText}>Ingredients</Text>
      {allData.ingredients.map((item: string, index: number) => (
        <Text style={styles.ingStyle} key={index}>
          {item}
        </Text>
      ))}
      <Text style={styles.ingText}>Cooking Instruction</Text>
      {allData.instructions.map((item: string, index: number) => (
        <Text key={index} style={styles.ingStyle}>
          {index + 1}. {item}
        </Text>
      ))}
    </ScrollView>
  );
};

export default RecipePage;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 15,
  },
  clockContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  clock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headText: {
    fontSize: 20,
  },
  ingText: {
    fontSize: 30,
    marginVertical: 20,
    fontWeight: "bold",
  },
  ingStyle: {
    fontSize: 17,
    color: "#6e6e6e",
  },
});
