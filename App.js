import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import FirstNavigation from './Navigation/FirstNavigation';

const App = () => {
  return (
    <View style={styles.container}>

      <NavigationContainer>
        <FirstNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5e1ce"
  },
});

export default App;
