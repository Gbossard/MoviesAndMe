import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, TextInput, View, FlatList } from 'react-native';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../api/TMDBApi';

const Search = () => {
    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);

    const loadFilms = () => {
      getFilmsFromApiWithSearchedText(query).then((data) => {setFilms(data.results), console.log(data.results)});
    };

    useEffect(() => {
      if(!query) {
        loadFilms();
      }
    }, [query]);

    return (
        <View style={styles.main_container}>
            <TextInput style={styles.textinput} onSubmitEditing={loadFilms} placeholder='Titre du film' value={query} onChangeText={(value) => setQuery(value)}/>
            <Button style={styles.button} title='Rechercher' onPress={() => loadFilms()}/>
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