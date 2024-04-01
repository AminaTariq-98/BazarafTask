import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../Store/CartSlice';
import { useNavigation } from '@react-navigation/native';
import Cart from './CartItems'

const ProductListingScreen = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const getProduct = () => {
    const URL = 'https://fakestoreapi.com/products';

    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
        setError(error.message)
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const handlePress = (item) => {
    navigation.navigate('ProductDetail', { product: item });
  };

  const ProductItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => handlePress(item)}
      activeOpacity={0.7}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.title}>{item.title.split(' ').slice(0, 2).join(' ')}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToCart(item)}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.heading}>Bazaraf</Text>
        <Cart />
      </View>
      {loading ? (
        <ActivityIndicator color='black' size='large' />
      ) : error ? <Text style={styles.errorText}>{error}</Text> : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={product}
          numColumns={2}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({ item }) => <ProductItem item={item} />}
        />
      )}
    </View>
  );
};

export default ProductListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  heading: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 15,
    marginTop: 7,
    marginBottom: 5
  },
  productContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 15,
    flex: 1,
    marginHorizontal: 12,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  productImage: {
    width: '60%',
    marginTop: 10,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    aspectRatio: 1,
  },
  productInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black'
  },
  price: {
    fontSize: 14,
    color: 'black'
  },
  addButton: {
    backgroundColor: 'transparent',
    width: '65%',
    marginTop: '2%',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  addButtonText: {
    color: 'black',
    fontSize: 12,
    alignSelf: 'center',
    fontWeight: '500',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700'
  },
  errorText: {
    color: 'red',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 40,
    alignSelf: 'center'
  },
});
