import ERPC from "@etclabscore/ethereum-json-rpc";
import React from "react";
import { Chain } from "../models/chain";

function useEthRPC(chains: Chain[]): [ERPC] {
  const [erpc, setErpc] = React.useState<ERPC>();
  const [selectedChain, setSelectedChain] = React.useState<Chain>();

  React.useEffect(() => {
    const urlToUse = 

    const runAsync = async () => {
      let parsedUrl;
      try {
        parsedUrl = new URL(rpcUrl);
      } catch (e) {
        console.log("passed an rpcURL that isnt real.");
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
  }, [chains]);

  return [erpc as ERPC, setSelectedChain];
}

export default useEthRPC;
