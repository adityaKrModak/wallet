import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import CardSection from "../components/Cards/CardSection";
import logo1 from "./../assets/cards/visa_white.png";
import logo2 from "./../assets/cards/mc.png";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.jpg";
import portrait3 from "./../assets/portraits/3.jpg";

import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`;
const Home: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "23434343",
      balance: 20000,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "11117773",
      balance: 2434000,
      alias: "Personal Trainer",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: "8676767",
      balance: 5600.43,
      alias: "School Prepaid",
      logo: logo1,
    },
  ];
  const transactionData = [
    {
      id: 1,
      amount: "-$56.00",
      date: "14 Sep 2021",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$246.00",
      date: "14 Aug 2021",
      title: "Shopping",
      subtitle: "Myntra ",
      art: {
        background: colors.tertiary,
        icon: "cart",
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "2450.56",
      name: "John Hopkins",
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      amount: "3450.56",
      name: "James Hopkins",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: "5450.56",
      name: "Jhonny Depp",
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
