import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
interface Props {
  title: string;
  onSearch(): void;
}

const SearchForm: React.FC<Props> = ({ title, onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());

  const onSearchPress = () => {
    onSearch({ from, to, departDate, departDate });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={from}
        onChangeText={setFrom}
        placeholder="From"
        style={styles.input}
      />
      <TextInput
        value={to}
        onChangeText={setTo}
        placeholder="To"
        style={styles.input}
      />
      <View style={styles.row}>
        <Text>&#128197;</Text>
        <DateTimePicker
          value={departDate}
          onChange={(event, date) => setDepartDate(date || new Date())}
          minimumDate={new Date()}
        />
        <Text style={styles.divider}>|</Text>
        <DateTimePicker
          value={arrivalDate}
          onChange={(event, date) => setArrivalDate(date || new Date())}
          minimumDate={departDate}
        />
      </View>
      <View style={styles.row}>
        <Button title="Search" onPress={onSearchPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 14,
    borderRadius: 10,
    backgroundColor: 'yellow',
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
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 6,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  divider: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default SearchForm;
