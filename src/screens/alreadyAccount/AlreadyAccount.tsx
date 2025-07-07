import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, FontFamily} from '../../constants';
import {ButtonCompt, StatusbarCompt, TextInputCompt} from '../../components';
import imageIndex from '../../assets/imageIndex';
import {ROUTE_NAMES} from '../../constants/routes';
import styles from './alreadyAccount.style';
import LinearGradient from 'react-native-linear-gradient';

const AlreadyAccount = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const isValidEmail = email.length > 5 && email.includes('@');

  const handleLogin = async () => {
    if (!isValidEmail) {
      setLoginError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setLoginError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      console.log('Login successful for:', email);

      navigation.reset({
        index: 0,
        routes: [{name: ROUTE_NAMES.HOME}],
      });
    } catch (error) {
      setLoginError('Could not log you in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const colors = {
    primary: '#5c0984',
    accentYellow: '#dcca06',
    accentOrange: '#5c0984',
  };

  return (
    <LinearGradient
      colors={[colors.primary, colors.accentYellow, colors.accentOrange]}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={styles.container}>
        <StatusbarCompt translucent backgroundColor={Colors.transparent} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.flexContainer}>
          {/* Close Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.closeButton}>
            <Feather name="x" size={24} color={Colors.white} />
          </TouchableOpacity>

          <View style={styles.content}>
            {/* Logo */}
            <Image source={imageIndex.activityimage} style={styles.logo} />

            {/* Title */}
            <Text style={styles.title}>Access Your Purchased Account</Text>

            {/* Email Input */}
            <TextInputCompt
              placeholder="Enter email..."
              value={email}
              onChangeText={text => {
                setEmail(text);
                setLoginError('');
              }}
              iconLeft="mail"
              error={loginError}
            />

            {/* Login Button */}
            <ButtonCompt
              title={loading ? 'Logging In...' : 'Log In'}
              onPress={handleLogin}
              style={[
                styles.loginButton,
                (!isValidEmail || loading) && styles.disabledButton,
              ]}
              textStyle={{color: Colors.black}}
              disabled={!isValidEmail || loading}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AlreadyAccount;
