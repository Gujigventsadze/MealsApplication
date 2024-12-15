import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  View,
  Pressable,
} from "react-native";

const ContactScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Name" style={styles.inputStyle} />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Surname" style={styles.inputStyle} />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Email" style={styles.inputStyle} />
        </View>
        <View style={styles.inputWrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              pressed && styles.pressedStyle,
            ]}
          >
            <Text style={styles.pressText}>Submit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  inputWrapper: {
    width: "80%",
    marginVertical: 5,
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 2,
    fontSize: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: "100%",
  },
  pressable: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderRadius: 20,
  },
  pressText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  pressedStyle: {
    opacity: 0.7,
  },
});
