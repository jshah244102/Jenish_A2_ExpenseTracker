import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import SignInScrenn from './screens/SignInScreen';
import DashboardScreen from './screens/DashboardScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const headerHomeOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#10ac84",
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerRight: () => (
      <Button title="Logout" onPress={() => {
        setIsLoggedIn(false);
      }} />
    ),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen name="SignIn">
            {(props) => <SignInScrenn {...props} setIsLogInStatus={setIsLoggedIn} />}
          </Stack.Screen>
        ) : (
          <Stack.Group screenOptions={headerHomeOptions}>
            <Stack.Screen name="Dashboard">
              {(props) => (
                <DashboardScreen
                  {...props}
                  transactions={transactions}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="AddTransaction">
              {(props) => (
                <AddTransactionScreen {...props} setTransactions={setTransactions} transactions={transactions} />
              )}
            </Stack.Screen>
            <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
