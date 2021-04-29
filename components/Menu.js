import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const Menu = ({source, menuName, onPress}) => {
    return (
        <View>
        <TouchableRipple
        onPress={onPress}
        >
        <View style={styles.menuItem}>
        <Image
        source={source}
        style={{
            width: 20,
            height: 20
        }}
        />
        <Text style={styles.menuItemText}>{menuName}</Text>
        </View>
        </TouchableRipple>
        </View>
    )
}

const styles= StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    },
})

export default Menu
