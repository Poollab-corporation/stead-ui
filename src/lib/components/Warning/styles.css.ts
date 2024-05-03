import {style} from '@vanilla-extract/css'

export const content = style({
  textAlign: 'center',
  width: '520px',
  margin: '0 0 20px 0'
});

export const title = style({
  //${(props) => props.theme.fonts[28]};
  //font-weight: ${(props) => props.theme.fontWeights.semiBold};
});

export const description = style({
  margin: '20px 0 0 0',
  //${(props) => props.theme.fonts[14]};
  //font-weight: ${(props) => props.theme.fontWeights.medium};
});
