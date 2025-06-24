import React, { useState } from 'react';
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
import { launchImageLibrary } from 'react-native-image-picker';

export default function AppHeader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageFromGallery = () => {
    const options = {
      mediaType: 'photo',
      selectionLimit: 1,
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel && !response.errorCode && response.assets?.length > 0) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo1.png')} style={styles.logo}
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

      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Create a Post</Text>

          <TextInput
            placeholder="Post Title"
            style={styles.postInput}
            placeholderTextColor="#888"
          />

          <TextInput
            placeholder="What's on your mind?"
            multiline
            numberOfLines={4}
            style={[styles.postInput, { height: 100, textAlignVertical: 'top' }]}
            placeholderTextColor="#888"
          />

         
          <TouchableOpacity style={styles.uploadButton} onPress={pickImageFromGallery}>
            <Icon name="image-outline" size={20} color="white" />
            <Text style={styles.uploadText}>Choose Image</Text>
          </TouchableOpacity>

          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={{ width: '100%', height: 200, marginTop: 10, borderRadius: 10 }}
            />
          )}

         
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Post</Text>
          </TouchableOpacity>
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
  scrollContent: { paddingTop: 10, paddingBottom: 30 },
  inputRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
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
  postContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  postInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#000',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 6,
    justifyContent: 'center',
    marginBottom: 15,
  },
  uploadText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: '#008CBA',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
