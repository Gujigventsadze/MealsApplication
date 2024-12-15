import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";

const AboutPage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.aboutText}>About Us</Text>
        <Text style={styles.textContainer}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          dicta? Non qui vel vero molestias enim et quaerat itaque, quia,
          eveniet nihil saepe recusandae voluptas labore velit perspiciatis
          corrupti autem! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Perferendis animi inventore sint, libero, odio exercitationem at
          ex natus magni adipisci esse autem distinctio quo. Eaque sit provident
          commodi molestiae quis?Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Atque, totam? Dolore enim, ullam nihil impedit
          facilis dolorum incidunt qui vero. Commodi blanditiis non corrupti!
          Consequuntur, dignissimos incidunt. Minima, doloribus aperiam?
        </Text>
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
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  aboutText: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 15,
  },
  textContainer: {
    fontSize: 20,
    textAlign: "justify",
  },
});
