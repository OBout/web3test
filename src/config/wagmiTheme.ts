import { Theme } from "@rainbow-me/rainbowkit";
const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: "blur(10px)",
  },
  colors: {
    accentColor: "#ff69b4", // Hot pink
    accentColorForeground: "#ffffff", // White
    actionButtonBorder: "#ff69b4", // Hot pink
    actionButtonBorderMobile: "#ff69b4", // Hot pink
    actionButtonSecondaryBackground: "#ffe4e1", // Misty rose
    closeButton: "#ff69b4", // Hot pink
    closeButtonBackground: "#ffe4e1", // Misty rose
    connectButtonBackground: "#ff69b4", // Hot pink
    connectButtonBackgroundError: "#ff6347", // Tomato
    connectButtonInnerBackground: "#ffffff", // White
    connectButtonText: "#ffffff", // White
    connectButtonTextError: "#ffffff", // White
    connectionIndicator: "#32cd32", // Lime green
    downloadBottomCardBackground: "#ffe4e1", // Misty rose
    downloadTopCardBackground: "#ff69b4", // Hot pink
    error: "#ff6347", // Tomato
    generalBorder: "#dcdcdc", // Gainsboro
    generalBorderDim: "#d3d3d3", // Light gray
    menuItemBackground: "#ffe4e1", // Misty rose
    modalBackdrop: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
    modalBackground: "#ffffff", // White
    modalBorder: "#ff69b4", // Hot pink
    modalText: "#000000", // Black
    modalTextDim: "#696969", // Dim gray
    modalTextSecondary: "#a9a9a9", // Dark gray
    profileAction: "#ff69b4", // Hot pink
    profileActionHover: "#ff1493", // Deep pink
    profileForeground: "#ffffff", // White
    selectedOptionBorder: "#ff69b4", // Hot pink
    standby: "#ffa500", // Orange
  },
  fonts: {
    body: "Arial, sans-serif",
  },
  radii: {
    actionButton: "12px",
    connectButton: "12px",
    menuButton: "8px",
    modal: "16px",
    modalMobile: "16px",
  },
  shadows: {
    connectButton: "0 4px 12px rgba(0, 0, 0, 0.1)",
    dialog: "0 4px 12px rgba(0, 0, 0, 0.1)",
    profileDetailsAction: "0 4px 12px rgba(0, 0, 0, 0.1)",
    selectedOption: "0 4px 12px rgba(0, 0, 0, 0.1)",
    selectedWallet: "0 4px 12px rgba(0, 0, 0, 0.1)",
    walletLogo: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
};

export default myCustomTheme;
