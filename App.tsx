/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { FlatList, SafeAreaView, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchForm from './src/components/SearchForm';
import FlightItem from './src/components/FlightItem';
import data from './data.json';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <SearchForm title="Search prices for your next trip" />
      <FlatList
        data={data}
        renderItem={({ item }) => <FlightItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default App;
