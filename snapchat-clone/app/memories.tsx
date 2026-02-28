import React, { useState } from 'react';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//Import pictures
const beachImage = require('../assets/images/beach.jpeg');
const mountainImage = require('../assets/images/mountain.jpg');
const cityImage = require('../assets/images/city.jpeg');
const christmasImage = require('../assets/images/christmas.jpeg');
const newyearImage = require('../assets/images/newyear.jpg');
const recentsImage = require('../assets/images/hello2.jpg');

const RECENTLY_ADDED = [
  { id: '1', image: beachImage, title: 'Beach Day' },
  { id: '2', image: mountainImage, title: 'Mountain View' },
  { id: '3', image: cityImage, title: 'City Lights' },
];

const DECEMBER_2025 = [
  { id: 'd1', image: christmasImage, title: 'Christmas Eve' },
  { id: 'd2', image: newyearImage, title: 'New Year Prep' },
];

const MemoriesScreen = ({ navigation }: any) => {
  const [searchModalVisible, setSearchModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerLeft}>
            <Image 
              source={require('../assets/images/right.png')} 
              style={styles.profileImage}
            />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Memories</Text>
          
          <TouchableOpacity 
            style={styles.headerRight}
            onPress={() => setSearchModalVisible(true)}
          >
            <Image 
              source={require('../assets/images/left.png')} 
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TouchableOpacity 
          style={styles.searchBar}
          onPress={() => setSearchModalVisible(true)}
        >
          <Ionicons name="search-outline" size={20} color="#666" />
          <Text style={styles.searchBarText}>Places, dates, etc.</Text>
        </TouchableOpacity>

        {/* Tab Navigation */}
        <View style={styles.tabs}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Camera Roll</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>AI Snaps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Scan</Text>
          </TouchableOpacity>
        </View>

        {/* Recents from Camera Roll */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.largeRecentContainer}>
            <View style={styles.largeRecentImage}>
              <Image 
                source={recentsImage}
                style={styles.largeRecentImageContent}
                resizeMode="cover"
              />
              <View style={styles.textOverlay}>
                <Text style={styles.overlayTitle}>Recents from Camera Roll</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Recently Added */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Added</Text>
          <View style={styles.recentlyAddedContainer}>
            {RECENTLY_ADDED.map((item, index) => (
              <TouchableOpacity 
                key={item.id} 
                style={[
                  styles.recentlyAddedItem,
                  index === 2 && styles.lastItemCentered 
                ]}
              >
                <View style={styles.recentlyAddedImageContainer}>
                  <Image 
                    source={item.image} 
                    style={styles.recentlyAddedImage} 
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* December 2025 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>December 2025</Text>
          <View style={styles.decemberContainer}>
            {DECEMBER_2025.map((item) => (
              <TouchableOpacity key={item.id} style={styles.decemberItem}>
                <View style={styles.decemberImageContainer}>
                  <Image 
                    source={item.image} 
                    style={styles.decemberImage} 
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/*Button - Bottom Right */}
        <View style={styles.createButtonContainer}>
          <TouchableOpacity style={styles.createButton}>
            <Ionicons name="add" size={20} color="#3d3b3b" />
            <Text style={styles.createButtonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerLeft: {
    width: 40,
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
  },
  headerRight: {
    width: 30,
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#eee',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  searchBarText: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  tab: {
    paddingVertical: 12,
    marginRight: 30,
    marginLeft: 30
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  tabText: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',

  },
  activeTabText: {
    color: '#000000',
    fontWeight: '600',
    
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555050',
    marginBottom: 16,
  },
  
  
  largeRecentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  largeRecentImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  largeRecentImageContent: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  overlayTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  
  // Recently Added 
  recentlyAddedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  recentlyAddedItem: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 16,
    marginHorizontal: '1%',
  },
  lastItemCentered: {
    marginRight: '10%',
  },
  recentlyAddedImageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  recentlyAddedImage: {
    width: '100%',
    height: '100%',
  },
  
  // December 2025
  decemberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  decemberItem: {
    width: '48%',
    aspectRatio: 1,
  },
  decemberImageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  decemberImage: {
    width: '100%',
    height: '100%',
  },

  // Create Button 
  createButtonContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'flex-end', 
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  createButtonText: {
    color: '#534949',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MemoriesScreen;