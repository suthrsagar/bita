import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from './LoginScreen';
const Mange = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo1.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="help-circle-outline" size={27} color="orange" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="notifications-outline" size={27} color="orange" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Items */}
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        <View style={styles.menu}>
          {/* Navigate to Account Settings */}
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('AccountSetting')}
          >
            <Text style={styles.menuText}>Account Settings</Text>
            <Icon name="chevron-forward-outline" size={20} color="#888" />
          </TouchableOpacity>
  <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('App Setting')}
          >
            <Text style={styles.menuText}>App Setting</Text>
            <Icon name="chevron-forward-outline" size={20} color="#888" />
          </TouchableOpacity>
  <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Mypost')}
          >
            <Text style={styles.menuText}>Mypost</Text>
            <Icon name="chevron-forward-outline" size={20} color="#888" />
          </TouchableOpacity>



          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={styles.menuText}>Login</Text>
            <Icon name="chevron-forward-outline" size={20} color="#888" />
          </TouchableOpacity>
         
          {/* Other static options */}
          {[' '].map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
              <Icon name="chevron-forward-outline" size={20} color="#888" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Mange;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    zIndex: 10,
  },

  logo: {
    width: 120,
    height: 55,
  },

  iconContainer: {
    flexDirection: 'row',
  },

  iconButton: {
    marginLeft: 15,
  },

  menu: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  menuText: {
    fontSize: 16,
    color: '#333',
  },
});
