import { createStore } from "reusable";
import useEthRPC from "../hooks/useEthRPC";
import { useQueryParam, StringParam } from "use-query-params";

export default createStore(() => {
  const [rpcUrlQuery] = useQueryParam("rpcUrl", StringParam);

  return useEthRPC(rpcUrlQuery);
});
