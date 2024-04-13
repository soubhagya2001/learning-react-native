import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/18114939/pexels-photo-18114939/free-photo-of-louvre-museum-in-paris.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        }}
        style={styles.cardImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  cardImage: {
      height: 500,
      margin:8
  },
});
