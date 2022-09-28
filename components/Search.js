import React from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

const Search = () => {
  return (
    <View style={styles.view}>
      <TextInput style={styles.textinput} placeholder='Titre du film'/>
      <Button style={styles.button} title='Rechercher' onPress={() => {}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }, 
  button: {
    height: 50
  }
});

export default Search;