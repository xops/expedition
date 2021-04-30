// import { useEffect } from "react";
// import { uniqBy } from "lodash";
import { IChain as Chain } from "../models/chain";
import React from "react";

// const mergeChainSets = (c1: Chain[], c2: Chain[]) => uniqBy(c1.concat(c2), "name");

export default function() {
  const [chains, setChains] = React.useState<Chain[]>([
    {
      name: "Ethereum Classic",
      network: "mainnet",
      rpc: ["https://www.ethercluster.com/etc"],
    },
    {
      name: "Matic",
      network: "mainnet",
      rpc: ["https://rpc-mainnet.matic.network"],
    },
    {
      name: "Matic - Mumbai",
      network: "testnet",
      rpc: ["https://rpc-mumbai.matic.today"],
    },
  ]);

  // uncomment once we add 'chain list provider' concept. This list blows.

  // useEffect(() => {
  //   if (chains === undefined) {
  //     fetch("https://chainid.network/chains.json")
  //       .then((r) => r.json())
  //       .then((chainIdNetwork) => {
  //         const filteredChains = chainIdNetwork.filter((c: Chain) => {
  //           if (c.rpc.length === 0) {
  //             return false;
  //           }
  //           return true;
  //         });
  //         if (chains) {
  //           setChains(mergeChainSets(chains, filteredChains));
  //         } else {
  //           setChains(filteredChains);
  //         };
  //       });
  //   }
  // }, [chains]);

  return [chains, setChains];
}
