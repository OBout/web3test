import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, base, mainnet, optimism, polygon } from "wagmi/chains";

const wagmiConfig = getDefaultConfig({
  appName: "rainbow-kit",
  projectId: import.meta.env.VITE_WAGMI_PROJECT_ID,
  chains: [mainnet, polygon, optimism, arbitrum, base],
});

export default wagmiConfig;
