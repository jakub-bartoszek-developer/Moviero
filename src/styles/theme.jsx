const colorNames = {
 White: "#FFFFFF",
 Black: "#000000",
 Raven: "#0a0a0a",
 DarkGrey: "hsl(0, 0%, 10%)",
 Grey: "#262626",
 LightGrey: "#737373",
 FadedBlack: "#00000050"
};

export const theme = {
 breakpoints: {
  xs: "400px",
  s: "650px",
  m: "900px",
  l: "1100px",
  xl: "1400px"
 },

 colors: {
  site: {
   background: colorNames.Raven,
   text: colorNames.White,
   mutedText: colorNames.LightGrey,
   blurredBackground: colorNames.FadedBlack
  },
  tile: {
   background: colorNames.DarkGrey,
   hoverBackground: colorNames.Grey
  }
 }
};
