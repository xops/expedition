import * as React from "react";
import { Menu, MenuItem, Tooltip, Button, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { IChain as Chain } from "../../models/chain";

interface IProps {
  chains: Chain[];
  selected: Chain;
  onChange: (chain: Chain) => void;
}

const ITEM_HEIGHT = 48;

const ChainDropdown: React.FC<IProps> = (props: IProps) => {
  const { t } = useTranslation();
  const { selected, onChange, chains } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (chain: Chain) => {
    setAnchorEl(null);
    onChange(chain);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={t("Switch Chain") as string}>
        <Button onClick={handleClick}>{selected.name}</Button>
      </Tooltip>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 10.5,
          },
        }}
      >
        {chains.map((chain, i) => (
          <MenuItem
            key={chain.name}
            selected={selected && selected.name === chain.name}
            onClick={() => handleMenuItemClick(chain)}
          >
            <div>
              <Typography variant="body1">{chain.name}</Typography>
              <Typography variant="caption">{chain.network}</Typography>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ChainDropdown;
