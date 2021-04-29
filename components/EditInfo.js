import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

const EditInfo = ({source, placeholder, keyboardType}) => {
    return (
        <View style={styles.action}>
    <Image
    source={source}
    resizeMode='contain'
    alignItems='center'
    style={{
      height: 15,
      width: 18
    }}
    />
    <TextInput
    placeholder = {placeholder}
    placeholderTextColor='#666666'
    keyboardType={keyboardType}
    autoCorrect={false}
    style={styles.textInput}
    />
  
    </View>
    )
}

const styles= StyleSheet.create({
    action:{
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -10,
    
        paddingLeft: 10,
        color: '#05375a',
      },
})

export default EditInfo;