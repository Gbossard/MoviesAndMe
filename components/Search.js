import React from 'react';
import { StyleSheet, Button, TextInput, View, FlatList, Text } from 'react-native';
import films from "../helpers/filmsData";
import FilmItem from './FilmItem';

const Search = () => {
  return (
    <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button style={styles.button} title='Rechercher' onPress={() => {}}/>
        <FlatList 
            data={films}
            keyExtractor={(item) => item.id.toString()} 
            renderItem={({item}) => <FilmItem film={item}/>}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    marginTop: 24,
    flex: 1
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