import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

const AccountSettingsScreen = ({ navigation }) => {
  const handleLogout = () => {
    ;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image
           source={require('../../../assets/images/profiles.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Sagar Suthar</Text>
        <Text style={styles.email}>sagar@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <SettingItem label="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
        <SettingItem label="Change Password" onPress={() => navigation.navigate('ChangePassword')} />
        <SettingItem label="Language" onPress={() => navigation.navigate('Language')} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <SettingItem label="Privacy Settings" onPress={() => navigation.navigate('PrivacySettings')} />
        <SettingItem label="Blocked Users" onPress={() => navigation.navigate('BlockedUsers')} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>More</Text>
        <SettingItem label="Notifications" onPress={() => navigation.navigate('Notifications')} />
        <SettingItem label="Help & Support" onPress={() => navigation.navigate('Help')} />
        <SettingItem label="About App" onPress={() => navigation.navigate('About')} />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const SettingItem = ({ label, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.itemText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f8fa',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#ff5252',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 50,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AccountSettingsScreen;
