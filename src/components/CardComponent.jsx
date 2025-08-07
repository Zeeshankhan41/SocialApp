import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    image: require('../assets/images/Img.jpg'),
    description: 'My last day for this year holiday! So excited to share my memories with you guys!',
  },
  {
    id: '2',
    image: require('../assets/images/Img.jpg'),
    description: 'Relaxing weekend getaway at the beach!',
  },
  {
    id: '3',
    image: require('../assets/images/Img.jpg'),
    description: 'Mountain hiking adventure with my friends!',
  },
];

const Card = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftSide}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/images/Img.jpg')}
            style={styles.avatar}
          />
           <TouchableOpacity style={styles.iconButton}>
            <Icon name="heart-outline" size={width * 0.05} color="#666" />
            <Text style={styles.iconText}>10</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="chatbubble-outline" size={width * 0.05} color="#666" />
            <Text style={styles.iconText}>24</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Icon name="share-social-outline" size={width * 0.05} color="#666" />
            <Text style={styles.iconText}>24</Text>
          </TouchableOpacity>

         
        </View>
      </View>

  
      <View style={styles.rightSide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const CardComponent = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card item={item} />}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: width * 0.025,
    overflow: 'hidden',
    marginBottom: height * 0.02,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    width: width - 20,
    alignSelf: 'center',
  },
  leftSide: {
    width: width * 0.17,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingVertical: height * 0.015,
  },
  avatar: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.03,
    marginBottom: height * 0.01,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.015,
  },
  iconText: {
    fontSize: width * 0.03,
    color: '#666',
    marginTop: 2,
  },
  rightSide: {
    flex: 1,
    padding: width * 0.035,
  },
  image: {
    width: '100%',
    height: height * 0.22,
    borderRadius: width * 0.015,
    marginBottom: height * 0.015,
    resizeMode: 'cover',
  },
  description: {
    fontSize: width * 0.038,
    color: '#333',
    lineHeight: width * 0.05,
  },
});
