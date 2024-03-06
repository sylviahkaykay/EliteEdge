import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SimpleLineIcons, FontAwesome, Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.one}>
          <Image source={require("./women.jpg")} style={styles.profilepicture} />
          <Text>Sylviah Jessica</Text>
          <Text>...</Text>
        </View>
      </View>
      <Text>
        Established in 2004, from the college dorm room of Mark Zuckerberg, a Harvard student, the website is now worth billions of dollars and is one of the world’s most recognisable brands. It’s even had the Hollywood treatment, with The Social Network, a film exploring the site’s conce.
      </Text>
      <Image source={require("./PEOPLE.jpg")} style={styles.body} />
      <View style={styles.two}>
        <SimpleLineIcons name="like" size={24} color="black" />
        <Text> 62 likes</Text>
        <FontAwesome name="comment-o" size={24} color="black" />
        <Text> 9 comments</Text>
        <Feather name="share-2" size={24} color="black" />
        <Text>3 shares</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profilepicture: {
    borderRadius: 39,
    height: 80, 
    width: 80,
  },
  profile: {
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    height: 200, 
    width: '100%', 
  },
  one: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  two: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,   
  },
});
