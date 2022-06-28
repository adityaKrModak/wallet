import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import BottomSheet from "reanimated-bottom-sheet";

import { SendMoneySectionProps } from "./types";
import SendMoneyItem from "./SendMoneyItem";

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {
  const sheetRef = useRef<BottomSheet>(null);
  const SendMoneySectonBackground = styled.View`
    width: 100%;
    padding-top: 15px;
    background-color: ${colors.white};
  `;

  const SendMoneyRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-horizontal: 25px;
  `;

  const SendMoneyList = styled.FlatList`
    width: 100%;
    flex: auto;
    min-height: 80%;
    padding-horizontal: 25px;
  `;

  const TextButton = styled.TouchableOpacity``;

  const renderContent = () => {
    return (
      <>
        <SendMoneySectonBackground>
          <SendMoneyRow style={{ marginBottom: 25 }}>
            <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
              Send money to
            </RegularText>
            <TextButton>
              <SmallText
                textStyles={{ fontWeight: "bold", color: colors.tertiary }}
              >
                +Add
              </SmallText>
            </TextButton>
          </SendMoneyRow>
          <SendMoneyList
            data={props.data}
            contentContainerStyle={{ alignItems: "flex-start" }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            keyExtractor={({ id }: any) => id.toString()}
            renderItem={({ item }: any) => <SendMoneyItem {...item} />}
          />
        </SendMoneySectonBackground>
      </>
    );
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[240, 85]}
      borderRadius={25}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

export default SendMoneySection;
