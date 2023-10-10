import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
}

const SearchForm: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 14,
    borderRadius: 10,
    backgroundColor: 'purple',
    boxShadow: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  title: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 16,
    color: 'white',
  },
});

export default SearchForm;
