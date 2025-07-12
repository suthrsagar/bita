import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const AddRoomScreen = () => {
  const [roomName, setRoomName] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const navigation = useNavigation();

  const pickImages = () => {
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 5 }, (response) => {
      if (!response.didCancel && !response.errorCode) {
        const selected = response.assets.map((asset) => asset.uri);
        setImages([...images, ...selected]);
      }
    });
  };

  const handleSubmit = () => {
    if (!roomName || !price || !location || !capacity || !description || images.length === 0) {
      Alert.alert('Validation', 'Please fill all fields and add at least one photo');
      return;
    }

    const newRoom = {
      name: roomName,
      quantity: `${capacity} Persons`,
      price: parseInt(price),
      discountPrice: parseInt(price), // for compatibility
      image: images[0], // using the first image
    };

    navigation.navigate('Explore', { newRoom });

    // Reset form
    setRoomName('');
    setPrice('');
    setLocation('');
    setCapacity('');
    setDescription('');
    setImages([]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add New Room</Text>

      <TextInput
        style={styles.input}
        placeholder="Owner Name"
        value={roomName}
        onChangeText={setRoomName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price per month"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Capacity"
        keyboardType="numeric"
        value={capacity}
        onChangeText={setCapacity}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={pickImages}>
        <Text style={styles.uploadButtonText}>📸 Add Room Photos</Text>
      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageContainer}>
        {images.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Room</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f9f9f9' },
  header: { fontSize: 24, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
  },
  textArea: { height: 100, textAlignVertical: 'top' },
  uploadButton: {
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadButtonText: { color: '#fff', fontSize: 16 },
  imageContainer: { flexDirection: 'row', marginBottom: 10 },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 10 },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});

export default AddRoomScreen;
