import css from "@emotion/css";
import { GridValues } from "../index";

const columns = (col: string, gap?: string) => css`
  display: grid;
  grid-template-columns: ${col};
  grid-column-gap: ${gap};
  grid-row-gap: ${gap};
`;

const center = css`
  display: grid;
  place-items: center center;
`;

const place = (v: string) => css`
  display: grid;
  place-items: ${v};
`;

export const grid: GridValues = {
  columns,
  center,
  place
};
