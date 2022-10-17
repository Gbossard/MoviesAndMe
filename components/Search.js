import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, TextInput, View, FlatList, ActivityIndicator } from 'react-native';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../api/TMDBApi';

const Search = () => {
    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const loadFilms = () => {
      getFilmsFromApiWithSearchedText(query).then((data) => {setFilms(data.results), setLoading(false)});
    };

    useEffect(() => {
      setLoading(true);
      if(!query) {
        loadFilms();
      }
    }, [query]);

    console.log(isLoading)

    return (
        <View style={styles.main_container}>
            <TextInput style={styles.textinput} onSubmitEditing={loadFilms} placeholder='Titre du film' value={query} onChangeText={(value) => setQuery(value)}/>
            <Button style={styles.button} title='Rechercher' onPress={() => loadFilms()}/>
            {isLoading ?
              <View style={styles.loader}>
                <ActivityIndicator size={'large'}/>
              </View> :
              <FlatList 
              data={films}
              keyExtractor={(item) => item.id.toString()} 
              renderItem={({item}) => <FilmItem film={item}/>}
            />
            }
            
            
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
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Search;