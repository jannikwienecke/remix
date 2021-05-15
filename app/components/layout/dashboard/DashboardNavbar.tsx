import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Box, IconButton, Toolbar } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";
import type { AppBarProps } from "@material-ui/core";
import MenuIcon from "../../../icons/Menu";
import AccountPopover from "../../popover/AccountPopover";
import ContactsPopover from "../../popover/ContactsPopover";
import ContentSearch from "../../search/ContentSearch";
import LanguagePopover from "../../popover/LanguagePopover";
import Logo from "../../helper/Logo";
import NotificationsPopover from "../../popover/NotificationsPopover";
import { Link as RemixLink } from "remix";

interface DashboardNavbarProps extends AppBarProps {
  onSidebarMobileOpen?: () => void;
}

const DashboardNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
  ...(theme.palette.mode === "light" && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
    color: theme.palette.primary.contrastText,
  }),
  ...(theme.palette.mode === "dark" && {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  }),
  zIndex: theme.zIndex.drawer + 100,
}));

const DashboardNavbar: FC<DashboardNavbarProps> = (props) => {
  const { onSidebarMobileOpen, ...other } = props;

  return (
    <DashboardNavbarRoot {...other}>
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton color="inherit" onClick={onSidebarMobileOpen}>
          <MenuIcon fontSize="small" />
        </IconButton>

        {/* <Hidden lgDown> */}
        <RemixLink to="/">
          <Logo
            sx={{
              height: 40,
              width: 40,
            }}
          />
        </RemixLink>
        {/* </Hidden> */}
        <Box
          sx={{
            flexGrow: 1,
            ml: 2,
          }}
        />
        <LanguagePopover />

        <Box sx={{ ml: 1 }}>
          <ContentSearch />
        </Box>
        <Box sx={{ ml: 1 }}>
          <ContactsPopover />
        </Box>
        <Box sx={{ ml: 1 }}>
          <NotificationsPopover />
        </Box>
        <Box sx={{ ml: 2 }}>
          <AccountPopover />
        </Box>
      </Toolbar>
    </DashboardNavbarRoot>
  );
};

DashboardNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func,
};

export default DashboardNavbar;
