import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/CartSlice';
import AboutProduct from '../Component/AboutProduct';

const ProductDetail = ({ route }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { product } = route.params;
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity }));
    };

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.leftContainer} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assests/light.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.rightContainer}>
                    <Text style={styles.cartText}>#About Product</Text>
                </View>
            </View>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.title}>{product.title}</Text>
                <View style={styles.direction}>
                    <Text style={styles.price}>Price: ${product.price}</Text>
                    <View style={{ flexDirection: 'row', marginRight: '5%' }}>
                        <Text style={styles.star2}>★</Text>
                        <Text style={styles.rating}>4.1</Text>
                    </View>
                </View>
                <View style={styles.qualityContainer}>
                    <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <AboutProduct />
            <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 25,
        marginTop: 5,
    },
    logo: {
        width: 29,
        height: 29,
        marginLeft: 5,
        tintColor: 'black'
    },
    rightContainer: {
        flexDirection: 'row',
        marginEnd: 'auto',
        marginLeft: 0,
        height: 32,
    },
    icon: {
        width: 18,
        height: 18,
    },
    cartText: {
        fontSize: 24,
        fontWeight: '700',
        marginLeft: 100,
        color: 'black'
    },
    productImage: {
        width: '100%',
        height: 300,
        marginTop: '6%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    productInfo: {
        marginTop: 15,
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
    },
    direction: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    star2: {
        color: '#FFD33C',
        paddingHorizontal: 10,
        fontSize: 16
    },
    rating: {
        fontSize: 16,
        color: 'black'
    },
    qualityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    quantityButton: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5
    },
    quantityButtonText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    quantityText: {
        fontSize: 18,
        color: 'black'
    },
    addToCartButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        alignItems: 'center'
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ProductDetail;
