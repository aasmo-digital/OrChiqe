import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, FontFamily} from '../../constants';
import {MOCK_WEEKLY_IDEAS} from './const.data';
import {IdeaCard, StatusbarCompt} from '../../components';
import styles from './style.browse';

// --- MOCK DATA ---
const INDOOR_ACTIVITIES = [
  {id: '1', image: 'https://img.icons8.com/plasticine/200/confetti.png'},
  {
    id: '2',
    image: 'https://img.icons8.com/plasticine/200/dragon-without-wings.png',
  },
  {id: '3', image: 'https://img.icons8.com/plasticine/200/scissors.png'},
  {id: '4', image: 'https://img.icons8.com/plasticine/200/piece-of-cake.png'},
];

// --- SUB-COMPONENTS ---
const HeroCard = () => (
  <View style={styles.heroCard}>
    <Image
      //   source={require('../../assets/images/hero_illustration.png')}
      style={styles.heroImage}
    />
    <View style={styles.heroContent}>
      <Text style={styles.heroTitle}>FairyTeller</Text>
      <Text style={styles.heroSubtitle}>
        Make your own Audio Stories with pictures!
      </Text>
    </View>
  </View>
);

const ActivityCard = ({item}) => (
  <TouchableOpacity style={styles.activityCard}>
    <Image source={{uri: item.image}} style={styles.activityImage} />
  </TouchableOpacity>
);

const TitledRow = ({title, data}) => (
  <View style={styles.rowContainer}>
    <Text style={styles.rowTitle}>{title}</Text>
    <FlatList
      data={data}
      renderItem={({item}) => <ActivityCard item={item} />}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

// 4. Create handler functions to pass to the child component
const handleSavePress = ideaId => {
  setWeeklyIdeas(currentIdeas =>
    currentIdeas.map(idea =>
      idea.id === ideaId ? {...idea, isSaved: !idea.isSaved} : idea,
    ),
  );
  // You could also dispatch a Redux action or call an API here
  console.log(`Toggled save for idea: ${ideaId}`);
};

const handleCardPress = item => {
  console.log('Playing video:', item.videoUrl);
  Alert.alert(`Play Video`, `Would you like to play "${item.title}"?`);
  // navigation.navigate('VideoPlayer', { videoUrl: item.videoUrl });
};

// --- MAIN COMPONENT ---
const BrowseScreen = ({navigation}) => {
  const [weeklyIdeas, setWeeklyIdeas] = useState(MOCK_WEEKLY_IDEAS);

  return (
    <SafeAreaView style={styles.container}>
      <StatusbarCompt barStyle="barStyle" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Ideas of the week</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3/3 LEFT</Text>
          </View>
        </View>

        <View style={{marginVertical: 10}}>
          <FlatList
            data={weeklyIdeas}
            renderItem={({item}) => (
              <IdeaCard
                item={item}
                onPress={handleCardPress}
                onSavePress={handleSavePress}
              />
            )}
            pagingEnabled
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
            // snapToInterval={320 + 20} // Card Width + margin
            decelerationRate="fast"
            snapToAlignment="start"
          />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={20}
            color={Colors.grayMedium}
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search..." style={styles.searchInput} />
          <TouchableOpacity
            onPress={() => navigation.navigate('FindIdeasModal')}
            style={styles.filterButton}>
            <Feather name="sliders" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Activity Rows */}
        <TitledRow title="Indoor" data={INDOOR_ACTIVITIES} />
        <TitledRow title="Outdoor" data={INDOOR_ACTIVITIES} />
      </ScrollView>
    </SafeAreaView>
  );
};

// --- STYLES ---

export default BrowseScreen;
