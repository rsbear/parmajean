import css from "@emotion/css";
import { FlexValues } from "../../types/index";

// debbie
const aic = css`
  display: flex;
  align-items: center;
`;
const aife = css`
  display: flex;
  align-items: flex-end;
`;
const aifs = css`
  display: flex;
  align-items: flex-start;
`;
const column = css`
  display: flex;
  flex-direction: column;
`;
const jcc = css`
  display: flex;
  justify-content: center;
`;
const jcfe = css`
  display: flex;
  justify-content: flex-end;
`;
const jcfs = css`
  display: flex;
  justify-content: flex-start;
`;

export const flex: FlexValues = {
  aic,
  aife,
  aifs,
  column,
  jcc,
  jcfe,
  jcfs
};
