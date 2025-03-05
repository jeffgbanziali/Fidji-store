import { StyleSheet, StatusBar, View, SafeAreaView, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import FirstNavigation from './Navigation/Start/FirstNavigation';
import TabNavigation from './Navigation/Home/TabNavigation';
import { AuthContext, AuthProvider } from './Context/AuthContext';
import { useContext, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { getUser } from './ReduxActions/user.actions';
import rootReducer from './reducers';
import LoadingScreen from './Components/SignInScreen/LoadingScreen';
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
import { Entypo } from '@expo/vector-icons';
import ShippingAddressProvider from './Context/ShippingAddressContext';
import BillingAddressProvider from './Context/BillingAddressContext';
import Toast from 'react-native-toast-message';



const App = () => {


  const store = createStore(
    rootReducer,
    applyMiddleware(thunk,)
  );

  const connectToRemoteDebugger = () => {
    NativeDevSettings.setIsDebuggingRemotely(true);
  };


  connectToRemoteDebugger()


  return (
    <Provider store={store}>
      <AuthProvider>
        <ShippingAddressProvider>
          <BillingAddressProvider>
            <Toast />
            <AppContent />
          </BillingAddressProvider>
        </ShippingAddressProvider>
      </AuthProvider>
    </Provider>
  );
}

const AppContent = () => {
  const { userToken } = useContext(AuthContext);
  const dispatch = useDispatch();


  useEffect(() => {
    if (userToken) {
      dispatch(getUser(userToken));
    }
  }, [dispatch, userToken]);




  const { isConnected } = useContext(AuthContext)

  console.log("JE suis en ligne ", isConnected)



  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style="auto" />
        {
          isConnected ? (
            userToken ? (
              userToken === null ? (
                <LoadingScreen />
              ) : (
                <TabNavigation />
              )
            ) : (
              <FirstNavigation />
            )
          ) : (
            <SafeAreaView
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <View style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}>
                <View style={{
                  width: "100%",
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <Entypo name="emoji-sad" size={100} color="black" />
                </View>
                <View style={{
                  width: "100%",
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <ActivityIndicator size={"large"} color={"black"} />
                  <Text style={{
                    marginTop: 10,
                    fontSize: 18
                  }}>
                    Veuillez vous connecter à interent
                  </Text>
                </View>


              </View>

            </SafeAreaView>
          )
        }

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
