import css from "@emotion/css";

const base = 5;

const x5 = css`
  padding-left: ${base}px;
  padding-right: ${base}px;
`;
const x10 = css`
  padding-left: ${base * 2}px;
  padding-right: ${base * 2}px;
`;
const x15 = css`
  padding-left: ${base * 3}px;
  padding-right: ${base * 3}px;
`;
const x20 = css`
  padding-left: ${base * 4}px;
  padding-right: ${base * 4}px;
`;
const x25 = css`
  padding-left: ${base * 5}px;
  padding-right: ${base * 5}px;
`;
const x30 = css`
  padding-left: ${base * 6}px;
  padding-right: ${base * 6}px;
`;
const x35 = css`
  padding-left: ${base * 7}px;
  padding-right: ${base * 7}px;
`;
const x40 = css`
  padding-left: ${base * 8}px;
  padding-right: ${base * 8}px;
`;
const x45 = css`
  padding-left: ${base * 9}px;
  padding-right: ${base * 9}px;
`;
const x50 = css`
  padding-left: ${base * 10}px;
  padding-right: ${base * 10}px;
`;
const x55 = css`
  padding-left: ${base * 11}px;
  padding-right: ${base * 11}px;
`;
const x60 = css`
  padding-left: ${base * 12}px;
  padding-right: ${base * 12}px;
`;
const x65 = css`
  padding-left: ${base * 13}px;
  padding-right: ${base * 13}px;
`;
const x70 = css`
  padding-left: ${base * 14}px;
  padding-right: ${base * 14}px;
`;
const x75 = css`
  padding-left: ${base * 15}px;
  padding-right: ${base * 15}px;
`;
const x80 = css`
  padding-left: ${base * 16}px;
  padding-right: ${base * 16}px;
`;
const x100 = css`
  padding-left: ${base * 20}px;
  padding-right: ${base * 20}px;
`;
const x120 = css`
  padding-left: ${base * 24}px;
  padding-right: ${base * 24}px;
`;

// vert axis
const y5 = css`
  padding-top: ${base}px;
  padding-bottom: ${base}px;
`;
const y10 = css`
  padding-top: ${base * 2}px;
  padding-bottom: ${base * 2}px;
`;
const y15 = css`
  padding-top: ${base * 3}px;
  padding-bottom: ${base * 3}px;
`;
const y20 = css`
  padding-top: ${base * 4}px;
  padding-bottom: ${base * 4}px;
`;
const y25 = css`
  padding-top: ${base * 5}px;
  padding-bottom: ${base * 5}px;
`;
const y30 = css`
  padding-top: ${base * 6}px;
  padding-bottom: ${base * 6}px;
`;
const y35 = css`
  padding-top: ${base * 7}px;
  padding-bottom: ${base * 7}px;
`;
const y40 = css`
  padding-top: ${base * 8}px;
  padding-bottom: ${base * 8}px;
`;
const y45 = css`
  padding-top: ${base * 9}px;
  padding-bottom: ${base * 9}px;
`;
const y50 = css`
  padding-top: ${base * 10}px;
  padding-bottom: ${base * 10}px;
`;
const y55 = css`
  padding-top: ${base * 11}px;
  padding-bottom: ${base * 11}px;
`;
const y60 = css`
  padding-top: ${base * 12}px;
  padding-bottom: ${base * 12}px;
`;
const y65 = css`
  padding-top: ${base * 13}px;
  padding-bottom: ${base * 13}px;
`;
const y70 = css`
  padding-top: ${base * 14}px;
  padding-bottom: ${base * 14}px;
`;
const y75 = css`
  padding-top: ${base * 15}px;
  padding-bottom: ${base * 15}px;
`;
const y80 = css`
  padding-top: ${base * 16}px;
  padding-bottom: ${base * 16}px;
`;
const y100 = css`
  padding-top: ${base * 20}px;
  padding-bottom: ${base * 20}px;
`;
const y120 = css`
  padding-top: ${base * 24}px;
  padding-bottom: ${base * 24}px;
`;

const pyx = (value: string) => css`
  padding: ${value};
`;
const pb = (v: string) => css`
  padding-bottom: ${v};
`;
const pl = (v: string) => css`
  padding-left: ${v};
`;
const pr = (v: string) => css`
  padding-right: ${v};
`;
const pt = (v: string) => css`
  padding-top: ${v};
`;
const px = (v: string) => css`
  padding-right: ${v};
  padding-left: ${v};
`;
const py = (v: string) => css`
  padding-top: ${v};
  padding-bottom: ${v};
`;

export interface paddingValues {
  pb: Function;
  pl: Function;
  pr: Function;
  pt: Function;
  py: Function;
  pyx: Function;
  px: Function;
  x5: any;
  x10: any;
  x15: any;
  x20: any;
  x25: any;
  x30: any;
  x35: any;
  x40: any;
  x45: any;
  x50: any;
  x55: any;
  x60: any;
  x65: any;
  x70: any;
  x75: any;
  x80: any;
  x100: any;
  x120: any;
  y5: any;
  y10: any;
  y15: any;
  y20: any;
  y25: any;
  y30: any;
  y35: any;
  y40: any;
  y45: any;
  y50: any;
  y55: any;
  y60: any;
  y65: any;
  y70: any;
  y75: any;
  y80: any;
  y100: any;
  y120: any;
}

export const p = {
  pb,
  pl,
  pr,
  pt,
  py,
  pyx,
  px,
  x5,
  x10,
  x15,
  x20,
  x25,
  x30,
  x35,
  x40,
  x45,
  x50,
  x55,
  x60,
  x65,
  x70,
  x75,
  x80,
  x100,
  x120,
  y5,
  y10,
  y15,
  y20,
  y25,
  y30,
  y35,
  y40,
  y45,
  y50,
  y55,
  y60,
  y65,
  y70,
  y75,
  y80,
  y100,
  y120
};
