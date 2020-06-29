import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import IntroScreen from "./src/screens/IntroScreen";
import ImageScreen from "./src/screens/ImageScreen";
const navigator = createStackNavigator(
  {
    Intro: IntroScreen,
    Home: HomeScreen,
  
    Images: ImageScreen
  },
  {
    initialRouteName: "Intro",
    defaultNavigationOptions: {
      title: "ForensIT"
    }
  }
);

export default createAppContainer(navigator);
