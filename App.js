import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import StackNavigation from './Navigation/StackNavigation';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from './Navigation/TabNavigation';

const App = () => {
  return (
    <View style={styles.container}>

      <NavigationContainer>
        <StackNavigation />
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
