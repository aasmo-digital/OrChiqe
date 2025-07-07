import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import {Colors, FontFamily} from '../../constants';

interface ButtonComptProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
  disabled?: boolean;
}

const ButtonCompt: React.FC<ButtonComptProps> = ({
  title,
  onPress,
  style,
  textStyle,
  isLoading = false,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.ButtonCompt, style]}
      onPress={onPress}
      // disabled={disabled}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonCompt: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderWidth: 0.3,
    borderColor: Colors.grayVeryLight,
  },
  text: {
    fontFamily: FontFamily.Bold,
    fontSize: 18,
    color: Colors.white,
  },
});

export default ButtonCompt;
