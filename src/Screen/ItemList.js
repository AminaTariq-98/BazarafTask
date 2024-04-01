import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, removeFromCart } from '../Store/CartSlice';
import { useNavigation } from '@react-navigation/core';

const ItemList = () => {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const handleRemoveItem = (itemId) => {
        dispatch(removeFromCart(itemId));
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
                    <Text style={styles.cartText}>#Cart Items</Text>
                </View>
            </View>
            {cartItems.length === 0 ? (
                <Text style={styles.noItem}>No items in cart</Text>
            ) : (
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Image source={{ uri: item.image }} style={styles.productImage} />
                            <Text style={styles.title}>{item.title.split(' ').slice(0, 2).join(' ')}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                            <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
                            <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                                <Image
                                    source={require('../assests/delete.png')}
                                    style={styles.deleteIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        height: 29,
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
        marginLeft: 130,
        color: 'black'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    noItem: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 30,
        alignSelf: 'center'
    },
    productImage: {
        width: "20%",
        marginTop: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        aspectRatio: 1,
    },
    title: {
        fontSize: 16,
        color: 'black',
    },
    price: {
        fontSize: 14,
        color: 'black',
    },
    deleteIcon: {
        width: 20,
        height: 20,
        marginRight: '3%'
    },
    quantityText: {
        fontSize: 14,
        color: 'black',
    }
});

export default ItemList;
