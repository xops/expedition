import { useEffect } from "react";
import { uniqBy } from "lodash";
import { Chain } from "../models/chain";
import React from "react";

const mergeChainSets = (c1: Chain[], c2: Chain[]) => uniqBy(c1.concat(c2), "name");

export default function() {
  const [chains, setChains] = React.useState<Chain[]>();

  useEffect(() => {
    if (chains === undefined) {
      fetch("https://chainid.network/chains.json")
        .then((r) => r.json())
        .then((chainIdNetwork) => {
          if (chains) {
            setChains(mergeChainSets(chains, chainIdNetwork));
          } else {
            setChains(chainIdNetwork);
          };
        });
    }
  }, [chains]);

  return [chains, setChains];
}
