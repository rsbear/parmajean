import css from "@emotion/css";

const base = 5;

const x5 = css`
  margin-left: ${base}px;
  margin-right: ${base}px;
`;
const x10 = css`
  margin-left: ${base * 2}px;
  margin-right: ${base * 2}px;
`;
const x15 = css`
  margin-left: ${base * 3}px;
  margin-right: ${base * 3}px;
`;
const x20 = css`
  margin-left: ${base * 4}px;
  margin-right: ${base * 4}px;
`;
const x25 = css`
  margin-left: ${base * 5}px;
  margin-right: ${base * 5}px;
`;
const x30 = css`
  margin-left: ${base * 6}px;
  margin-right: ${base * 6}px;
`;
const x35 = css`
  margin-left: ${base * 7}px;
  margin-right: ${base * 7}px;
`;
const x40 = css`
  margin-left: ${base * 8}px;
  margin-right: ${base * 8}px;
`;
const x45 = css`
  margin-left: ${base * 9}px;
  margin-right: ${base * 9}px;
`;
const x50 = css`
  margin-left: ${base * 10}px;
  margin-right: ${base * 10}px;
`;
const x55 = css`
  margin-left: ${base * 11}px;
  margin-right: ${base * 11}px;
`;
const x60 = css`
  margin-left: ${base * 12}px;
  margin-right: ${base * 12}px;
`;
const x65 = css`
  margin-left: ${base * 13}px;
  margin-right: ${base * 13}px;
`;
const x70 = css`
  margin-left: ${base * 14}px;
  margin-right: ${base * 14}px;
`;
const x75 = css`
  margin-left: ${base * 15}px;
  margin-right: ${base * 15}px;
`;
const x80 = css`
  margin-left: ${base * 16}px;
  margin-right: ${base * 16}px;
`;
const x100 = css`
  margin-left: ${base * 20}px;
  margin-right: ${base * 20}px;
`;
const x120 = css`
  margin-left: ${base * 24}px;
  margin-right: ${base * 24}px;
`;

// vert axis
const y5 = css`
  margin-top: ${base}px;
  margin-bottom: ${base}px;
`;
const y10 = css`
  margin-top: ${base * 2}px;
  margin-bottom: ${base * 2}px;
`;
const y15 = css`
  margin-top: ${base * 3}px;
  margin-bottom: ${base * 3}px;
`;
const y20 = css`
  margin-top: ${base * 4}px;
  margin-bottom: ${base * 4}px;
`;
const y25 = css`
  margin-top: ${base * 5}px;
  margin-bottom: ${base * 5}px;
`;
const y30 = css`
  margin-top: ${base * 6}px;
  margin-bottom: ${base * 6}px;
`;
const y35 = css`
  margin-top: ${base * 7}px;
  margin-bottom: ${base * 7}px;
`;
const y40 = css`
  margin-top: ${base * 8}px;
  margin-bottom: ${base * 8}px;
`;
const y45 = css`
  margin-top: ${base * 9}px;
  margin-bottom: ${base * 9}px;
`;
const y50 = css`
  margin-top: ${base * 10}px;
  margin-bottom: ${base * 10}px;
`;
const y55 = css`
  margin-top: ${base * 11}px;
  margin-bottom: ${base * 11}px;
`;
const y60 = css`
  margin-top: ${base * 12}px;
  margin-bottom: ${base * 12}px;
`;
const y65 = css`
  margin-top: ${base * 13}px;
  margin-bottom: ${base * 13}px;
`;
const y70 = css`
  margin-top: ${base * 14}px;
  margin-bottom: ${base * 14}px;
`;
const y75 = css`
  margin-top: ${base * 15}px;
  margin-bottom: ${base * 15}px;
`;
const y80 = css`
  margin-top: ${base * 16}px;
  margin-bottom: ${base * 16}px;
`;
const y100 = css`
  margin-top: ${base * 20}px;
  margin-bottom: ${base * 20}px;
`;
const y120 = css`
  margin-top: ${base * 24}px;
  margin-bottom: ${base * 24}px;
`;

const myx = (value: string) => css`
  margin: ${value};
`;
const mb = (v: string) => css`
  margin-bottom: ${v};
`;
const ml = (v: string) => css`
  margin-left: ${v};
`;
const mr = (v: string) => css`
  margin-right: ${v};
`;
const mt = (v: string) => css`
  margin-top: ${v};
`;
const mx = (v: string) => css`
  margin-right: ${v};
  margin-left: ${v};
`;
const my = (v: string) => css`
  margin-top: ${v};
  margin-bottom: ${v};
`;

export interface MarginValues {
  mb: Function;
  ml: Function;
  mr: Function;
  mt: Function;
  my: Function;
  myx: Function;
  mx: Function;
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

export const m = {
  mb,
  ml,
  mr,
  mt,
  my,
  myx,
  mx,
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
  y120,
};
