import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function AddTransactionScreen({ navigation, transactions, setTransactions }) {
    const [form, setForm] = useState({
        date: '',
        amount: '',
        description: '',
        location: '',
        type: '',
        category: '',
      });
    
      const validateDate = (date) => {
        // Check for YYYY-MM-DD format
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(date);
      };
    
      const validateAmount = (amount) => {
        // Check for valid positive number
        return !isNaN(amount) && parseFloat(amount) > 0;
      };
    
      const handleAdd = () => {
        const { date, amount, description, location, type, category } = form;
    
        if (!date || !amount || !description || !location || !type || !category) {
          Alert.alert('Error', 'All fields are required!');
          return;
        }
    
        if (!validateDate(date)) {
          Alert.alert('Invalid Date', 'Please enter a valid date in YYYY-MM-DD format');
          return;
        }
    
        if (!validateAmount(amount)) {
          Alert.alert('Invalid Amount', 'Amount must be a valid number greater than 0');
          return;
        }
    
        setTransactions([...transactions, { ...form, amount: parseFloat(amount) }]);
        navigation.goBack();
      };
    
      const updateForm = (key, value) => {
        setForm({ ...form, [key]: value });
      };
    
      return (
        <View style={styles.container}>
          <TextInput
            placeholder="Date (YYYY-MM-DD)"
            onChangeText={(text) => updateForm('date', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Amount"
            keyboardType="numeric"
            onChangeText={(text) => updateForm('amount', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Description"
            onChangeText={(text) => updateForm('description', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Location"
            onChangeText={(text) => updateForm('location', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Type (Credit/Debit/Refund)"
            onChangeText={(text) => updateForm('type', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Category"
            onChangeText={(text) => updateForm('category', text)}
            style={styles.input}
          />
          <Button title="Add Transaction" onPress={handleAdd} />
        </View>
      );
}

const styles = {
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 12
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    }
};
