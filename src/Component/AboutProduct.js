import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AboutProduct = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.about}>#about Product</Text>
            <Text style= {styles.description}>"Introducing our latest innovation in portable technology.Our product combines sleek design with powerful performance, making it perfect for both work and play. With its advanced features and intuitive interface, it's the ultimate companion for modern living."</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    about: {
        marginTop: '5%',
        color: 'black',
        fontSize: 18,
        fontWeight: '500'
    },
    description: {
        color: 'black',
        fontSize: 14,
        marginTop: '2%'
    }
});

export default AboutProduct;
