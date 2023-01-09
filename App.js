import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./src/components/login/Login"
import SignUp from "./src/components/signup/SignUp"
import BuyEnergy from './src/components/market/BuyEnergy';
import SellEnergy from './src/components/market/SellEnergy'
import ViewBlockchain from './src/components/blockchain/Blockchain';
import Dashboard from './src/components/dashboard/Dashboard';
import EVcharging from './src/components/EV/EVcharging';
import { NavigationContainer, TabActions, createNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {
  const naviRef = createNavigationContainerRef();
  const naviBar = createBottomTabNavigator();

  function navigate(name,params) {
    if (naviRef.isReady()) {
      naviRef.navigate(name,params)
    }
  }
  return (
    <NavigationContainer ref={naviRef}>
      <naviBar.Navigator initialRouteName="Login" component={Login} screenOptions={{headerShown:false}}>
        <naviBar.Screen name="Dashboard" component={Dashboard} />
        <naviBar.Screen name='Blockchain' component={ViewBlockchain} />
        <naviBar.Screen name='Market' component={BuyEnergy} />
        <naviBar.Screen name='EV' component={EVcharging} />
        <naviBar.Screen name='Profile' component={EVcharging} />
        
        {/* navigation for hidden items*/}
        <naviBar.Screen name='SignUp' component={SignUp} 
          options={{
            tabBarButton: () => (
              <View style={{width:0,height:0}}></View>
            ),
            tabBarStyle:{display:'none'},
            
          }}/>
        <naviBar.Screen name='Login' component={Login} 
          options={{
            tabBarButton: () => (
              <View style={{width:0,height:0}}></View>
            ),
            tabBarStyle:{display:'none'},
            
          }}/>
      </naviBar.Navigator>
    </NavigationContainer>
    //<Login />
    //<SignUp />
    //<BuyEnergy />
    //<SellEnergy />
    //<ViewBlockchain />
    //<Dashboard />
    //<EVcharging />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
