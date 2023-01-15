const sizes = {
  xsmall: "8px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "18px",
  xxlarge: "20px",
};
const theme = {
  global: {
    sizes: sizes,
    colors: {
      focus: "red",
    },
    edgeSize: {
      xsmall: 8,
    },
    control: {
      border: {
        width: 0,
      },
    },
    input: {
      padding: "xsmall",
      font: {
        size: sizes.medium,
      },
    },
  },
  box: {},
  button: {
    default: {},
  },
  card: {
    hover: {},
  },
  icon: {
    size: {
      meidum: {
        size: sizes.medium,
      },
    },
  },
  text: {
    medium: {
      size: sizes.medium,
      height: sizes.large,
    },
  },
};

export default theme;
