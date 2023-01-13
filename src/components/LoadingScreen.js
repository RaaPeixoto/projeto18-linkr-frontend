import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

import { COLORS } from "../constants/layoutConstants";

export default function Loading() {
  return (
    <Screen>
      <TailSpin
        height="80"
        width="80"
        color={COLORS.loadingBar}
        ariaLabel="tail-spin-loading"
        radius="0"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Screen>
  );
}

const Screen = styled.div`
  background-color: ${COLORS.background};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
