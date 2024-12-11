import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RootStackParamList from "../Types/NavigationTypes";

interface CountryBoxProps {
  country: string;
}

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "CountryPage"
>;

const CountryBox: React.FC<CountryBoxProps> = ({ country }) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.mainContainer,
        pressed && styles.pressedStyle,
      ]}
      onPress={() => navigation.navigate("CountryPage", { country })}
    >
      <Text style={styles.textContainer}>{country}</Text>
    </Pressable>
  );
};

export default CountryBox;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    paddingVertical: 30,
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    margin: 10,
  },
  textContainer: {
    fontSize: 25,
    fontWeight: "bold",
  },
  pressedStyle: {
    opacity: 0.7,
  },
});
