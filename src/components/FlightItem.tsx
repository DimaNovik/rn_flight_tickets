import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  item: {
    price: String;
    to: {
      airline: string;
      departAt: string;
      arriveAt: string;
      duration: string;
    };
    from: {
      airline: string;
      departAt: string;
      arriveAt: string;
      duration: string;
    };
  };
}

const FlightItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.item}>
      <View>
        <View>
          <Text>{item.from.departAt}</Text>
          <Text>{'U+2708'}</Text>
          <Text>{item.from.arriveAt}</Text>
        </View>
        <View>
          <Text>{item.to.departAt}</Text>
          <Text>{'U+2708'}</Text>
          <Text>{item.to.arriveAt}</Text>
        </View>
      </View>
      <View>
        <Text>{item.from.airline}</Text>
        <Text>{item.to.airline}</Text>
      </View>
      <View>
        <Text>{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default FlightItem;
