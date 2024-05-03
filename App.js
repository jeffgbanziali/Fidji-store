import { StyleSheet, StatusBar, View, Platform } from 'react-native';
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
import { getProducts, getUsers } from './ReduxActions/products.actions';
import LoadingScreen from './Components/SignInScreen/LoadingScreen';

const App = () => {

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );



  return (
    <Provider store={store}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Provider>
  );
}

const AppContent = () => {
  const { userToken } = useContext(AuthContext);
  const dispatch = useDispatch();

  console.log("My token", userToken)

  useEffect(() => {
    if (userToken) {
      dispatch(getUser(userToken));
    }
  }, [dispatch, userToken]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);






  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style="auto" />

        {
          userToken ? (

            userToken === null ? (

              <LoadingScreen />

            ) : (

              <TabNavigation />

            )

          ) : (
            
            <FirstNavigation />
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
