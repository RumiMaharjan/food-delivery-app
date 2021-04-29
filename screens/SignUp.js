import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as firebase from 'firebase';
import { AuthContext } from '../components/Context';

const SignUp = ({navigation}) => {
    const {register} = React.useContext(AuthContext);

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
       
    });

    const handleSignUp=(email, password)=>{
        
        // if ( data.email.length == 0 || data.password.length == 0 ) {
        //     Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [
        //         {text: 'Okay'}
        //     ]);
        //     return;
        // }
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        // .then(()=> navigation.navigate('Home'))
       
    }

    // const SignUpHandle = (email, password) => {

    //     // const foundUser = Users.filter( item => {
    //     //     return email == item.email && password == item.password;
    //     // } );

       

    //     // if ( foundUser.length == 0 ) {
    //     //     Alert.alert('Invalid User!', 'Email or password is incorrect.', [
    //     //         {text: 'Okay'}
    //     //     ]);
    //     //     return;
    //     //}
    //     register(email, password);
    // }

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

   

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#fff' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
            <FontAwesome 
                    name="user"
                    color="#05375a"
                    size={20}
                />
               
                <TextInput 
                    placeholder="Email"
                    keyboardType= 'email-address'
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                <Feather 
                name="check-circle"
                color="green"
                size={20}
            />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
            <Feather 
            name="lock"
            color="#05375a"
            size={20}
        />
               
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

            { data.isValidPassword ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View>
                }

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
            <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
               
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                   
                </TouchableOpacity>
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={[styles.signIn, {
                        borderColor: '#FF6347',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                    onPress={()=>{handleSignUp(data.email, data.password)}}
                >
                
            
                    <Text style={[styles.textSign, {
                        color: '#FF6347'
                    }]}>Sign Up</Text>
                
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#FF6347',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                <Text style={[styles.textSign, {
                    color: '#FF6347'
                }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FF6347'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'black'

    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
