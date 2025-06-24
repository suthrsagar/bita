import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { categories, products } from './seedData';

export default function GroceryHomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Text style={styles.sectionTitle}>Shop by Category</Text>
      <CategoryList data={categories} />
      <Text style={styles.sectionTitle}>Top Picks</Text>
      <ProductList data={products} />
    </View>
  );
}

function Header() {
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
      </View>
    </View>
  );
}

function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search-outline" size={20} color="#888" style={styles.searchIcon} />
      <TextInput
        placeholder="Search groceries..."
        placeholderTextColor="#888"
        style={styles.searchInput}
      />
    </View>
  );
}

function CategoryList({ data }) {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.name}
      contentContainerStyle={styles.categoryList}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.categoryCard}>
          <Image source={{ uri: item.image }} style={styles.categoryImage} />
          <Text style={styles.categoryName}>{item.name}</Text>
        </View>
      )}
    />
  );
}

function ProductList({ data }) {
  return (
    <ScrollView contentContainerStyle={styles.productsWrapper}>
      {data.map((product, index) => (
        <View key={index} style={styles.productCard}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productQuantity}>{product.quantity}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.discountPrice}>₹{product.discountPrice}</Text>
            <Text style={styles.actualPrice}>₹{product.price}</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 0 },

  
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

  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  searchIcon: { marginRight: 6 },
  searchInput: { flex: 1, height: 40, color: '#333' },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 8,
    color: '#333',
  },

  categoryList: { paddingLeft: 15, paddingRight: 10 },
  categoryCard: {
    width: 80,
    marginRight: 12,
    alignItems: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 6,
    backgroundColor: '#f5f5f5',
  },
  categoryName: {
    fontSize: 12,
    textAlign: 'center',
    color: '#444',
  },

  productsWrapper: {
    paddingHorizontal: 15,
    paddingBottom: 40,
  },
  productCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  productImage: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
    color: '#333',
  },
  productQuantity: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discountPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
  },
  actualPrice: {
    fontSize: 13,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  addButton: {
    backgroundColor: '#ff9900',
    borderRadius: 5,
    paddingVertical: 6,
    marginTop: 10,
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontWeight: '600',
  },
});
