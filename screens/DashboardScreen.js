import React from 'react';
import { View, Button, FlatList, Text, TouchableOpacity } from 'react-native';

export default function DashboardScreen({ navigation, transactions }) {
  return (
    <View style={styles.container}>
      
      <FlatList
        style = {{ width: '100%'}}
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TransactionDetail', { item })}>
            <View>
                <Text style={styles.cardTitle}>{item.description}</Text>
                <Text style={styles.cardSubTitle}>${item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddTransaction')}>
        <Text style={{color: 'white', textAlign: 'center'}}>
            Add Transaction
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    button: {
        width: '80%',
        height: 40,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
        border: 'none',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    card: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
        border: 'none',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardSubTitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10,
    }
}
