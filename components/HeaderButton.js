import React from 'react'
import {TouchableOpacity, Image} from 'react-native';
import { icons, COLORS, SIZES, FONTS } from '../constants'

const HeaderButton = ({onPress, source}) => {
    return (
        <TouchableOpacity
                    style={{
                        width: 50,
                      paddingLeft:10,
                      paddingRight: 10,
                        justifyContent: 'center'
                    }}
                    onPress= {onPress}
                >
                    <Image
                        source={source}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
    )
}

export default HeaderButton
