import React from 'react';
import { View, Text } from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Date: {item.date}</Text>
      <Text>Amount: {item.amount}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Location: {item.location}</Text>
      <Text>Type: {item.type}</Text>
      <Text>Category: {item.category}</Text>
    </View>
  );
}
