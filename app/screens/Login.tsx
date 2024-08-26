import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    Button,
    Alert
} from 'react-native';

import { 
    FIREBASE_AUTH 
} from '../../FirebaseConfig';

import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
} from '@react-native-firebase/auth';

const Login = () => {
    const [initializing, setInitializing] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            Alert('Login Failed: ' + error.message)
        } finally {
            setLoading(false);
        }
    };

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            Alert('Registration Failed: ' + error.message)
        } finally {
            setLoading(false);
        }
    }

    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)} secureTextEntry={true}></TextInput>
            
            {loading ? ( 
                <ActivityIndicator size='large' color='#0000ff'/>
            ) : (
            <>
                <Button title='Login' onPress={signIn}></Button>
                <Button title='Register' onPress={signUp}></Button>
            </> 
            )}
        
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input:{
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    }
})