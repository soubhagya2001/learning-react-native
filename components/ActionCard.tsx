import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ElevatedCards from './ElevatedCards';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Text>What's new in JS</Text>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/12887621/pexels-photo-12887621.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
          }}
          style={styles.cardImage}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => openWebsite('https://www.pexels.com/')}>
          <Text>Read more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {},
  elevatedCard: {},
  cardImage: {
    height: 200,
  },
});
