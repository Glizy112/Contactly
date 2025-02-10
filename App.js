/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ContactCard from './components/ContactCard';
import data from './contacts.json';
import Button from './components/Button';

const App = () => {

  const [contacts, setContacts] = useState([]);     
  const [currentIdx, setCurrentIdx] = useState(7);  //Keeping track of current index to load the contacts from contacts.json
  const [loading, setLoading] = useState(false);

  //Loading the first set of contacts at initial app start
  useEffect(()=> {
    setContacts(data.data.slice(0,7));
    //console.log(contacts.length);
  },[]);

  //Handler function to load more contacts on user scroll
  const handleLoadMore =()=> {
    setLoading(true);
    console.log("Scroll Called")
    
    let newData = data.data.slice(currentIdx, currentIdx+2);
    setTimeout(()=> setContacts([...contacts, ...newData]), 700);
    
    setCurrentIdx(currentIdx+2);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="people-outline" color={"darkblue"} size={28}/>
          <Text style={{fontSize: 28, color: 'black', fontWeight: '500'}}> Team Members </Text>
        </View>
        <Ionicons name="information-circle" color={"green"} size={56}/>
      </View>

      <FlatList
        data={contacts}
        initialNumToRender={5}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        keyExtractor={(item)=> item.phone}
        renderItem={({item})=> (
          <ContactCard idx={item.name} item={item}/>
        )}
        contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}
        ListFooterComponent={loading && <ActivityIndicator animating size={"large"} color={"#000"}/>}
      />
      
      <Button btnTitle="Add Members"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  headingContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'space-between',
  },
});

export default App;
