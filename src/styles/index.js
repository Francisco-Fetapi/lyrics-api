import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export const Text = styled(Typography)``;

export const Home = {
  Container: styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  `,
  FormProcuarMusica: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;

    .MuiInputBase-input {
      height: 14px;
    }
  `,
  Logo: styled(Box)`
    display: flex;
    justify-content: center;
    svg {
      font-size: 80px;
    }
  `,
  CampoParaLegenda: styled(Box)`
    margin-top: 30px;
    position: relative;
    top: 50px;
    opacity: 0;
    transition: all 0.5s ease-in-out;

    &.active {
      top: 0px;
      opacity: 1;
    }
  `,
};
