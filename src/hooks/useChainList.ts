// import { useEffect } from "react";
// import { uniqBy } from "lodash";
import { IChain as Chain } from "../models/chain";
import React from "react";
require('dotenv').config();

declare var process : {
  env: {
    REACT_APP_NETWORK: string
  }
}

export default function() {
  const [chains, setChains] = React.useState<Chain[]>([
    {
      name: "OmgX",
      network: "Layer 2",
      rpc: [process.env.REACT_APP_NETWORK],
    }
  ]);
  return [chains, setChains];
}
