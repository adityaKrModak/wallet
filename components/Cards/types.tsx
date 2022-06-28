import { ImageSourcePropType } from "react-native";

export interface CardProps {
  id: number;
  accountNo: String;
  balance: number;
  alias: String;
  logo: ImageSourcePropType;
}

export interface CardSectionProps {
  data: Array<CardProps>;
}
