import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../Store/CartSlice';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const itemCount = cartItems.length;

    return (
        <TouchableOpacity  onPress={() => navigation.navigate('itemList')}>
            <View style={styles.item}>
                <Text style={styles.text}>{itemCount}</Text>
            </View>
            <Image
                source={require('../assests/store.png')}
                style={styles.image}
            />
        </TouchableOpacity>
    );
};
export default Cart;

const styles = StyleSheet.create({
    image: {
        width: 25, height: 25,
        marginRight: 15,
        marginBottom: 7,
    },
    item: {
        width: '35%',
        fontWeight: '500',
        borderRadius: 100,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: 5
    },
    text: {
        fontSize: 10,
        fontWeight: '500',
        color: 'white',
        alignSelf: 'center'
    }
})
