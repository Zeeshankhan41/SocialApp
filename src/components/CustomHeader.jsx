import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const CustomHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Menu pressed')}>
        <Icon name="menu" size={width * 0.06} color="black" />
      </TouchableOpacity>

      {showSearch ? (
        <View style={styles.searchContainer}>
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search..."
            placeholderTextColor="#666"
            style={styles.searchInput}
            autoFocus
          />
          <TouchableOpacity onPress={handleCloseSearch} style={styles.closeIcon}>
            <Icon name="close" size={width * 0.06} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setShowSearch(true)}>
          <Icon name="search" size={width * 0.06} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.025,
    backgroundColor: '#fff',
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: width * 0.04,
    color: '#000',
    paddingVertical: 5,
  },
  closeIcon: {
    marginLeft: 8,
  },
});
