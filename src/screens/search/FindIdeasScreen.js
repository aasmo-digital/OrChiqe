import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, FontFamily} from '../../constants';
import styles from './style.findIdea';

// --- MOCK DATA FOR FILTERS ---
const AGES = ['3-4 y.o.', '5-6 y.o.', '7-9 y.o.', '10-12 y.o.'];
const GOALS = [
  'Ideas for kids to do',
  'To develop my kids',
  'Build close relations',
  'To have fun',
  'Everyday simple ideas',
];
const LOCATIONS = ['Indoor', 'Outdoor', 'On The Go', 'Bedtime'];
const STUFF = ['No Stuff', 'Basic Stuff', 'Special Stuff'];

// --- REUSABLE SUB-COMPONENTS ---
const Tag = ({text, isSelected, onPress}) => (
  <TouchableOpacity
    style={[styles.tag, isSelected && styles.tagSelected]}
    onPress={onPress}>
    <Text style={[styles.tagText, isSelected && styles.tagTextSelected]}>
      {text}
    </Text>
  </TouchableOpacity>
);

const FilterSection = ({icon, title, options, selected, onSelect}) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <View style={styles.tagsContainer}>
      {options.map(option => (
        <Tag
          key={option}
          text={option}
          isSelected={selected.includes(option)}
          onPress={() => onSelect(option)}
        />
      ))}
    </View>
  </View>
);

// --- MAIN COMPONENT ---
const FindIdeasScreen = ({navigation}) => {
  // State for each filter category
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedStuff, setSelectedStuff] = useState([]);

  const toggleSelection = (item, state, setState) => {
    setState(prevState =>
      prevState.includes(item)
        ? prevState.filter(i => i !== item)
        : [...prevState, item],
    );
  };

  const handleViewIdeas = () => {
    const filters = {
      ages: selectedAges,
      goals: selectedGoals,
      locations: selectedLocations,
      stuff: selectedStuff,
    };
    console.log('Applying Filters:', filters);
    // Here you would navigate to a results screen with the filters,
    // or dismiss the modal and update the BrowseScreen.
    // For now, we just close the modal.
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Find Ideas</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}>
          <Feather name="x" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        <FilterSection
          icon="👶"
          title="How old are your kid(s)?"
          options={AGES}
          selected={selectedAges}
          onSelect={item =>
            toggleSelection(item, selectedAges, setSelectedAges)
          }
        />
        <FilterSection
          icon="🎯"
          title="What's your goal?"
          options={GOALS}
          selected={selectedGoals}
          onSelect={item =>
            toggleSelection(item, selectedGoals, setSelectedGoals)
          }
        />
        <FilterSection
          icon="🏠"
          title="Where are you?"
          options={LOCATIONS}
          selected={selectedLocations}
          onSelect={item =>
            toggleSelection(item, selectedLocations, setSelectedLocations)
          }
        />
        <FilterSection
          icon="📦"
          title="What do you have at hand?"
          options={STUFF}
          selected={selectedStuff}
          onSelect={item =>
            toggleSelection(item, selectedStuff, setSelectedStuff)
          }
        />
      </ScrollView>

      {/* Sticky Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Text style={styles.clearAllText}>Clear All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewIdeasButton}
          onPress={handleViewIdeas}>
          <Text style={styles.viewIdeasButtonText}>View Ideas</Text>
          <View style={styles.ideaCountBadge}>
            <Text style={styles.ideaCountText}>1042</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FindIdeasScreen;
