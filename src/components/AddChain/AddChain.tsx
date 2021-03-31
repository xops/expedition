import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { IChain as Chain } from "../../models/chain";

interface IProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: (chain: Chain) => void;
}

const AddChain: React.FC<IProps> = (props: IProps) => {
  const [name, setName] = React.useState<string>();
  const [network, setNetwork] = React.useState<string>("mainnet");
  const [rpc, setRpc] = React.useState<string>();

  const handleSubmit = () => {
    if (name === undefined || network === undefined || rpc === undefined) { return; }

    const chain: Chain = { name, network, rpc: [rpc] };
    props.onSubmit(chain);
  };

  return (
    <>
      <Dialog open={props.open} onClose={props.onCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Chain</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a chain to the chain list and begin using Expedition with your own
            rpc provider, please enter the required fields below:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Chain Name"
            type="text"
            fullWidth
            onChange={(v) => setName(v.target.value) }
          />
          <TextField
            margin="dense"
            id="network"
            label="Network"
            defaultValue="mainnet"
            type="text"
            fullWidth
            onChange={(v) => setNetwork(v.target.value) }
          />
          <TextField
            margin="dense"
            id="rpcs"
            label="RPC endpoint"
            type="text"
            fullWidth
            onChange={(v) => setRpc(v.target.value) }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddChain;
