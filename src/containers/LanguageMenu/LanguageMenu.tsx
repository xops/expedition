import * as React from "react";
import { Menu, MenuItem, Tooltip, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { supportedLanguages, reverseSupportedLanguages } from "../../i18n";

const LanguageMenu: React.FC = (props) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (lang: string) => {
    setAnchorEl(null);
    // this forces language change for react + i18n react
    i18n.changeLanguage(reverseSupportedLanguages[lang]);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={t("Change Language") as string}>
        <Button onClick={handleClick}>{supportedLanguages[i18n.language]}</Button>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.values(supportedLanguages).map((lang, i) => (
          <MenuItem key={i} onClick={(event) => handleMenuItemClick(lang)}>{lang}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageMenu;
