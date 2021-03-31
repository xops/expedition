import { createStore } from "reusable";
import useEthRPC from "../hooks/useEthRPC";

export default createStore(() => useEthRPC());
