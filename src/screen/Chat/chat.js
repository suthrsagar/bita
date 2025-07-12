import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
  Alert
} from 'react-native';

const HelpScreen = ({ navigation }) => {
  const [complaint, setComplaint] = useState('');

 const contactEmail = 'sutharsagar710@gmail.com';
  const contactPhone = '+91 8905730102';
  const openPhone = () => {
    Linking.openURL(`tel:${contactPhone}`);
  };

  const openEmail = () => {
    Linking.openURL(`mailto:${contactEmail}`);
  };

  const openSMS = () => {
    const message = 'Hello, I need help with...';
    Linking.openURL(`sms:${contactPhone}?body=${encodeURIComponent(message)}`);
  };

  const handleComplaintSubmit = () => {
    if (!complaint.trim()) {
      Alert.alert('Error', 'Please enter your complaint.');
      return;
    }

    Alert.alert('Submitted', 'Your complaint has been submitted.');
    setComplaint('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.description}>
        If you're experiencing any issues, feel free to contact us or submit a complaint below.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Customer Care</Text>

        <TouchableOpacity style={styles.contactButton} onPress={openPhone}>
          <Text style={styles.contactText}>📞 Call Us: {contactPhone}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={openEmail}>
          <Text style={styles.contactText}>📧 Email: {contactEmail}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={openSMS}>
          <Text style={styles.contactText}>📱 Send SMS to Support</Text>
        </TouchableOpacity>
 
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Submit a Complaint</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your complaint here..."
          multiline
          numberOfLines={5}
          value={complaint}
          onChangeText={setComplaint}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleComplaintSubmit}>
          <Text style={styles.submitText}>Submit Complaint</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f8fa',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  contactButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    height: 120,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HelpScreen;
