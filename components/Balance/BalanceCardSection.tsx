import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import BalanceCard from "./BalanceCard";
import { BalanceCardProps } from "./types";

const BalanceCardSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
  return (
    <>
      <BalanceCardSectionBackground>
        <BalanceCard {...props} />
      </BalanceCardSectionBackground>
    </>
  );
};

export default BalanceCardSection;
