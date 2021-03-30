import { CircularProgress } from "@material-ui/core";
import useEthRPCStore from "../stores/useEthRPCStore";
import * as React from "react";
import BlockView from "../components/BlockView";
import EthereumJSONRPC, { Block as IBlock } from "@etclabscore/ethereum-json-rpc";

export default async function Block(props: any) {
  const { match: { params: { hash } } } = props;
  const [block, setBlock] = React.useState<IBlock>();
  let ethrpc: EthereumJSONRPC | undefined  = undefined;

  React.useEffect(() => {
    if (ethrpc === undefined) { return; }
    ethrpc.eth_getBlockByHash(hash, true).then((b) => {
      if (b === null) { return; }
      setBlock(b);
    });
  }, [hash, ethrpc]);

  const erpc = await useEthRPCStore();
  if (erpc === undefined) { return; }
  [ethrpc] = erpc;
  if (!block) { return (<CircularProgress />); }
  return (<BlockView block={block} />);
}
