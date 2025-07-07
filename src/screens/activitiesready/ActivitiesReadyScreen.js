import React, {useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, FontFamily} from '../../constants';
import {ActivityCard, ButtonCompt} from '../../components';
import {ROUTE_NAMES} from '../../constants/routes';

// --- Mock Data ---
// In a real app, this would come from your API
const MOCK_ACTIVITIES = [
  {
    id: '1',
    title: 'Experiment With Sound Waves',
    imageUrl:
      'https://images.pexels.com/photos/3731422/pexels-photo-3731422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Play Dough Hockey Game',
    imageUrl:
      'https://images.pexels.com/photos/1153976/pexels-photo-1153976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: 'No-Paint Outdoors Drawing',
    imageUrl:
      'https://images.pexels.com/photos/8031934/pexels-photo-8031934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    title: 'Painting Mood Master',
    imageUrl:
      'https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '5',
    title: 'Play Dough Maze',
    imageUrl:
      'https://images.pexels.com/photos/4546132/pexels-photo-4546132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '6',
    title: 'Clock Learning Craft',
    imageUrl:
      'https://images.pexels.com/photos/8991361/pexels-photo-8991361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '7',
    title: 'Pebble Funny Faces',
    imageUrl:
      'https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '8',
    title: 'Easy Flower Brush Stamping',
    imageUrl:
      'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '9',
    title: 'Make Your Name Blossom',
    imageUrl:
      'https://images.pexels.com/photos/1104974/pexels-photo-1104974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  // These will only show if the user has a subscription
  {
    id: '10',
    title: 'DIY Lava Lamp',
    imageUrl:
      'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '11',
    title: 'Shadow Puppet Theater',
    imageUrl:
      'https://images.pexels.com/photos/7210631/pexels-photo-7210631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '12',
    title: 'Nature Weaving Frame',
    imageUrl:
      'https://images.pexels.com/photos/6710777/pexels-photo-6710777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const ActivitiesReadyScreen = () => {
  const navigation = useNavigation();

  // --- BUSINESS LOGIC SIMULATION ---
  // In a real app, you'd get this from your user state store (e.g., Zustand, Redux)
  const hasSubscription = false; // <-- CHANGE THIS TO `true` TO SEE ALL ACTIVITIES

  // useMemo prevents recalculating this on every render
  const activitiesToShow = useMemo(() => {
    if (hasSubscription) {
      return MOCK_ACTIVITIES; // User has package, show all
    }
    return MOCK_ACTIVITIES.slice(0, 9); // No package, show only the first 9
  }, [hasSubscription]);

  const handleContinue = () => {
    // Navigate to the main app Home Screen
    navigation.reset({
      index: 0,
      routes: [{name: ROUTE_NAMES.PAKAGESSCREEN}],
    });
  };

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Your Activities</Text>
      <Text style={styles.title}>Are Ready</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: 'https://img.icons8.com/plasticine/200/smiling-star.png'}}
        style={styles.peekingStar}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={activitiesToShow}
        keyExtractor={item => item.id}
        numColumns={3}
        ListHeaderComponent={renderHeader}
        renderItem={({item}) => (
          <ActivityCard
            title={item.title}
            imageUrl={item.imageUrl}
            onPress={() => console.log('Pressed on:', item.title)}
          />
        )}
        columnWrapperStyle={{justifyContent: 'center'}}
        ListFooterComponent={() => (
          <ButtonCompt
            title="Continue"
            onPress={handleContinue}
            style={styles.continueButton}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  peekingStar: {
    position: 'absolute',
    top: 40,
    right: 0,
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 60, // Space for the star
  },
  title: {
    fontFamily: FontFamily.ExtraBold,
    fontSize: 32,
    color: Colors.white, // Dark Teal
    textAlign: 'center',
  },

  continueButton: {
    backgroundColor: Colors.accentOrange,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20, // Your orange/yellow color
  },
});

export default ActivitiesReadyScreen;
