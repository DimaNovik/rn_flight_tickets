/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { FlatList, SafeAreaView, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchForm from './src/components/SearchForm';
import FlightItem from './src/components/FlightItem';
import data from './data.json';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [items, setItems] = useState([]);

  const onSearch = (data) => {
    console.log(data);
  };

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
  };

  const listContainerStyle = {
    margin: 10,
    backgroundColor: 'yellow',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <SearchForm
        title="Search prices for your next trip"
        onSearch={onSearch}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <FlightItem item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={listContainerStyle}
        bounces={false}
      />
    </SafeAreaView>
  );
}

export default App;
