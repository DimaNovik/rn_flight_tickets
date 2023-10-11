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
    <View style={[styles.item, styles.row, styles.row_between]}>
      <View>
        <View style={styles.row}>
          <Text>{item.from.departAt}</Text>
          <Text>&#128769;</Text>
          <Text>{item.from.arriveAt}</Text>
        </View>
        <View style={styles.row}>
          <Text>{item.to.departAt}</Text>
          <Text>&#128769;</Text>
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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row_between: {
    justifyContent: 'space-between',
  },
});

export default FlightItem;
