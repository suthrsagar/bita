import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export default function RoomHomeScreen({ route }) {
  const [roomList, setRoomList] = useState([]);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const newRoom = route.params?.newRoom;

      if (newRoom) {
        const alreadyExists = roomList.some(
          (room) => room.name === newRoom.name && room.image === newRoom.image
        );
        if (!alreadyExists) {
          setRoomList((prev) => [newRoom, ...prev]);
        }
      }
    }, [route.params?.newRoom])
  );

  return (
    <View style={styles.container}>
      <Header onAddPress={() => navigation.navigate('AddRoom')} />
      <Text style={styles.sectionTitle}>Available Rooms</Text>
      <RoomList data={roomList} />
    </View>
  );
}

function Header({ onAddPress }) {
  return (
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
        <TouchableOpacity onPress={onAddPress} style={styles.iconButton}>
          <Icon name="add-circle-outline" size={27} color="orange" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function RoomList({ data }) {
  if (data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No rooms added yet.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.roomList}>
      {data.map((room, index) => (
        <View key={index} style={styles.roomCard}>
          <Image source={{ uri: room.image }} style={styles.roomImage} />
          <Text style={styles.roomName}>{room.name}</Text>
          <Text style={styles.roomCapacity}>{room.quantity}</Text>
          <Text style={styles.roomPrice}>₹{room.price}/night</Text>
        </View>
      ))}
    </ScrollView>
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
  },
  logo: { width: 120, height: 55 },
  iconContainer: { flexDirection: 'row' },
  iconButton: { marginLeft: 15 },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 8,
    color: '#333',
  },

  roomList: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  roomCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  roomImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
  },
  roomCapacity: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  roomPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4CAF50',
    marginTop: 5,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});
