import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import AddPosting from '../components/AddPosting';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomHeader />
      <AddPosting />
      <CardComponent/>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#f9f9f9',
  },
});
