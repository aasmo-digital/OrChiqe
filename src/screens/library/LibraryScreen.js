import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors, FontFamily} from '../../constants';

// --- MOCK DATA ---
const ACTIVITIES = [
  {
    name: 'Indoor',
    icon: 'https://cdn-icons-png.flaticon.com/512/3771/3771521.png', // Cartoon boy reading
  },
  {
    name: 'Outdoor',
    icon: 'https://cdn-icons-png.flaticon.com/512/3771/3771534.png', // Cartoon kids playing football
  },
  {
    name: 'Holidays',
    icon: 'https://cdn-icons-png.flaticon.com/512/3771/3771507.png', // Cartoon airplane + travel bag
  },
];

const TALKS = [
  {
    name: 'Word Games',
    icon: 'https://cdn-icons-png.flaticon.com/512/4753/4753956.png', // Cartoon letters
  },
  {
    name: 'Questions',
    icon: 'https://cdn-icons-png.flaticon.com/512/5203/5203055.png', // Question bubble
  },
  {
    name: 'Tell a story',
    icon: 'https://cdn-icons-png.flaticon.com/512/7044/7044600.png', // Book with speech bubble
  },
];

// --- SUB-COMPONENT ---
const CategoryCard = ({item}) => (
  <TouchableOpacity style={styles.card}>
    <View
      style={{
        backgroundColor: 'rgba(255,255,255,0.15)',
        padding: 10,
        borderRadius: 15,
      }}>
      <Image source={{uri: item.icon}} style={styles.cardIcon} />
    </View>

    <Text style={styles.cardText}>{item.name}</Text>
  </TouchableOpacity>
);

const CategorySection = ({title, data}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.grid}>
      {data.map(item => (
        <CategoryCard key={item.name} item={item} />
      ))}
    </View>
  </View>
);

// --- MAIN COMPONENT ---
const LibraryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.mainTitle}>Library</Text>
        <CategorySection title="Activities" data={ACTIVITIES} />
        <CategorySection title="Talks" data={TALKS} />
        <CategorySection title="Digital Games" data={ACTIVITIES} />
      </ScrollView>
    </SafeAreaView>
  );
};

// --- STYLES ---
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary},
  mainTitle: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 28,
    color: Colors.white,
    padding: 20,
  },
  section: {marginBottom: 20},
  sectionTitle: {
    fontFamily: FontFamily.Bold,
    fontSize: 24,
    color: Colors.white,
    marginLeft: 20,
    marginBottom: 15,
  },
  grid: {flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15},
  card: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardIcon: {
    width: 60,
    height: 60,
  },
  cardText: {
    fontFamily: FontFamily.ExtraBold,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default LibraryScreen;
