import React, {memo, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Make sure Feather is installed
import {Colors, FontFamily} from '../../constants';

interface InputBoxProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  iconLeft?: string; // e.g., 'mail' or 'lock'
  secureTextEntry?: boolean;
  error?: string;
}

const TextInputCompt = ({
  placeholder,
  value,
  onChangeText,
  iconLeft,
  secureTextEntry = false,
  error,
}: InputBoxProps) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  return (
    <View style={styles.wrapper}>
      <View
        style={[styles.inputContainer, error ? styles.inputErrorBorder : {}]}>
        {iconLeft && (
          <Icon
            name={iconLeft}
            size={20}
            color={Colors.black}
            style={styles.leftIcon}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.grayMedium}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          value={value}
          onChangeText={onChangeText}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setHidePassword(prev => !prev)}
            style={styles.eyeIcon}>
            <Icon
              name={hidePassword ? 'eye-off' : 'eye'}
              size={20}
              color={Colors.grayMedium}
            />
          </TouchableOpacity>
        )}
      </View>

      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default memo(TextInputCompt);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.black,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 55,
    backgroundColor: Colors.white,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.black,
    fontFamily: FontFamily.Regular,
  },
  leftIcon: {
    marginRight: 8,
  },
  eyeIcon: {
    padding: 4,
  },
  inputErrorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: Colors.white,
    fontSize: 14,
    marginTop: 4,
    marginLeft: 4,
    fontFamily: FontFamily.Regular,
  },
});
