import { CircularProgress } from "@material-ui/core";
import * as React from "react";
import { useBlockNumber } from "../helpers";
import BlockList from "./BlockList";
import useEthRPCStore from "../stores/useEthRPCStore";
import { useParams } from "react-router-dom";

interface IUrlParams {
  number: string | undefined;
}

export default function NodeView(props: any) {
  const [erpc] = useEthRPCStore();
  const [blockNumber] = useBlockNumber(erpc);
  const urlParams = useParams<IUrlParams>();

  let blockNum = blockNumber;
  if (urlParams && urlParams.number !== undefined) {
    try {
      blockNum = parseInt(urlParams.number, 10);
    } catch (e) {
      console.error("Unable to parse block number from URL");
    }
  }

  React.useEffect(() => {
    if (blockNum === undefined || blockNumber === undefined) {
      return;
    }
    if (blockNum > blockNumber) {
      props.history.push(`/blocks/${blockNumber}`);
    }
    if (blockNum < 0) {
      props.history.push("/blocks/0");
    }
  }, [blockNumber, blockNum, props.history]);
  if (blockNumber === undefined || blockNum > blockNumber) {
    return (<CircularProgress />);
  }
  return (
    <BlockList
      from={Math.max(blockNum - 14, 0)}
      to={blockNum}
      disablePrev={blockNum >= blockNumber}
      disableNext={blockNum === 0}
      onPrev={() => {
        const newQuery = blockNum + 15;
        props.history.push(`/blocks/${newQuery}`);
      }}
      onNext={() => {
        const newQuery = Math.max(blockNum - 15, 0);
        props.history.push(`/blocks/${newQuery}`);
      }}
    />
  );
}
