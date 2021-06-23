import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

const items = [
  {id: 1, name: 'Site do IFAL'},
  {id: 2, name: 'Estágio'},
  {id: 3, name: 'Noticias'},
  {id: 4, name: 'Cursos'},
  {id: 5, name: 'facebook'},
  {id: 6, name: 'YouTube'},
  {id: 7, name: 'Twitter'},
  {id: 8, name: 'Eventos'},
  {id: 9, name: 'Editais'},
  {id: 10, name: 'Instagram'},
];

const App = () => {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetch('https://aboutreact.herokuapp.com/demosearchables.php')
      .then((response) => response.json())
      .then((responseJson) => {
        setServerData(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <Image
          source={{
            uri:
              'https://www2.ifal.edu.br/campus/palmeira/comunicacao/arquivos/logos-do-ifal-vertical.png/@@images/ac3e97aa-6806-4523-bc47-7bf3c0950b0f.png',
          }}
          style={styles.logoifal}
          />
      <View style={styles.container}>
        <Text style={styles.titleText}>

          Pesquisar sobre o IFAL

        </Text>
        <Text style={styles.headingText}>
          Lista suspensa pesquisável de matriz estática
        </Text>
        <SearchableDropdown
          onTextChange={(text) => alert(text)}
          onItemSelect={(item) => alert('Seja Bem-Vindo Ao IFAL!')}
          containerStyle={{padding: 5}}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            color: '#222',
          }}
          itemsContainerStyle={{
            maxHeight: '60%',
          }}
          items={items}
          defaultIndex={2}
          placeholder="Pesquisar"
          resPtValue={false}
          underlineColorAndroid="transparent"
        />
        <Text style={styles.headingText}>
          Lista suspensa pesquisável do array dinâmico do servidor
        </Text>
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          onItemSelect={(item) => alert(JSON.stringify(item))}
          containerStyle={{padding: 5}}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            color: '#222',
          }}
          itemsContainerStyle={{
            maxHeight: '50%',
          }}
          items={serverData}
          defaultIndex={2}
          placeholder="Pesquisar"
          resetValue={false}
          underlineColorAndroid="transparent"
        />
        
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  headingText: {
    padding: 8,
    color: 'white'
  },
  logoifal: {
    width: 100,
    height: 100,
    left: 110,
    top: 10
  },
});
