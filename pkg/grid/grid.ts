import css from '@emotion/css'

const columns = (col: string, gap?: string) => css`
  display: grid;
  grid-template-columns: ${col};
  grid-column-gap: ${gap};
  grid-row-gap: ${gap};
`

const center = css`
  display: grid;
  place-items: center center;
`

const place = (v: string) => css`
  display: grid;
  place-items: ${v};
`

export interface GridValues {
  columns: Function;
  center: any;
  place: Function;
}

export const grid: GridValues = {
  columns,
  center,
  place
}