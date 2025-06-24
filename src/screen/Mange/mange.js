import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>``
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

     
      <ScrollView contentContainerStyle={{ padding: 15 }}>
c

        
        <View style={styles.menu}>
          {['Account Settings', 'My Posts', 'Login', 'Register , '].map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
              <Icon name="chevron-forward-outline" size={20} color="#888" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}


 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

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
  logo: { width: 120, height: 55 },

  iconContainer: { flexDirection: 'row' },
  iconButton: { marginLeft: 15 },

  inputRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  inputIcon: { marginRight: 8 },
  textInput: { flex: 1, height: 40, color: 'black' },

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
