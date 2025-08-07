import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const AddPosting = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const staticData = [
    { id: '1', name: 'Anna', image: require('../assets/images/Img.jpg') },
    { id: '2', name: 'John', image: require('../assets/images/Img.jpg') },
    { id: '3', name: 'Sara', image: require('../assets/images/Img.jpg') },
  ];

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <TouchableOpacity style={styles.addCard} onPress={() => setModalVisible(true)}>
          <Text style={styles.addText}>Add +</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={[{ id: 'add' }, ...staticData]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />

      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Posting</Text>

            <TouchableOpacity style={styles.imagePicker}>
              <Text style={styles.selectText}>Select Image</Text>
            </TouchableOpacity>

            <TextInput
              placeholder="Enter name"
              placeholderTextColor="#aaa"
              style={styles.input}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={[styles.button, styles.cancelButton]}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.addButton]}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AddPosting;

// Responsive styles
const cardWidth = width * 0.22;
const cardHeight = height * 0.17;
const imageSize = cardWidth;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
  },
  addCard: {
    width: width*0.2,
    height: cardHeight,
    backgroundColor: '#f9b44cde',
    borderRadius: 10,
    marginRight: width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  addText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#555',
    transform: [{ rotate: '-90deg' }],
  },
  card: {
    width: cardWidth,
    height: cardHeight,
    borderRadius: 10,
    marginRight: width * 0.03,
    borderWidth:2,
    borderColor:'#ed8720ff',
    overflow: 'hidden',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 1,
  },
  name: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    marginTop: 4,
    color: 'black',
    alignSelf:'center',
    marginTop:10
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: width * 0.05,
    elevation: 10,
  },
  modalTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  imagePicker: {
    height: height * 0.15,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectText: {
    color: '#888',
    fontSize: width * 0.04,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: width * 0.04,
    color: '#000',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: height * 0.015,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#aaa',
  },
  addButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
});
