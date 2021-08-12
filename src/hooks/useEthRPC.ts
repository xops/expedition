import ERPC from "@etclabscore/ethereum-json-rpc";
import React, { Dispatch, useState, useEffect } from "react";
import { IChain as Chain } from "../models/chain";

function useEthRPC(queryUrlOverride?: string): [ERPC, Dispatch<Chain>] {
  const [erpc, setErpc] = React.useState<ERPC>();
  const [selectedChain, setSelectedChain] = React.useState<Chain>();
  const [urlOverride] = useState(queryUrlOverride || process.env.REACT_APP_ETH_RPC_URL);

  useEffect(() => {
    if (selectedChain === undefined && !urlOverride) { return; }

    const rpcUrl = selectedChain?.rpc.reduce((curr, toCheck) => {
      if (curr !== selectedChain.rpc[0]) { return curr; }
      if (toCheck.indexOf("${") !== -1) { return curr; }
      return toCheck;
    }, selectedChain.rpc[0]);

    const runAsync = async () => {
      let parsedUrl;
      const newUrl = urlOverride || rpcUrl;
      if (!newUrl) { return; }
      try {
        parsedUrl = new URL(newUrl);
      } catch (e) {
        alert("invalid rpc url " + newUrl);
        return;
      }
      let rpc;
      try {
        const protocol = parsedUrl.protocol.split(":")[0] as any;
        const fallbackPort = protocol === "http" ? 80 : 443;
        const port = parseInt(parsedUrl.port, 10);
        rpc = new ERPC({
          transport: {
            host: parsedUrl.hostname,
            port: port ? port : fallbackPort,
            type: protocol,
            path: parsedUrl.pathname,
          },
        });
      } catch (e) {
        return;
      }
      if (rpc) {
        setErpc(rpc);
      }
    };
    runAsync();
    return () => {
      if (erpc) {
        erpc.rpc.requestManager.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChain]);

  return [erpc as ERPC, setSelectedChain];
}

export default useEthRPC;
