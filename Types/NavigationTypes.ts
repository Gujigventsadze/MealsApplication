type RootStackParamList = {
  HomeScreen: undefined; 
  CountryPage: { country: string };
  RecipePage: { allData: { title: string; time: string; difficulty: string; instructions: string[]; ingredients: string[] } };
};



export default RootStackParamList

