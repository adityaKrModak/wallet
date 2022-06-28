import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}
