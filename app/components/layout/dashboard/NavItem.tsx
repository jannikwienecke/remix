import { useState } from "react";
import type { FC, ReactNode } from "react";
import { Link as RemixLink } from "remix";
import PropTypes from "prop-types";
import { Box, Button, Collapse, ListItem } from "@material-ui/core";
import type { ListItemProps } from "@material-ui/core";
import Menu from "../../../icons/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import EqualizerSharpIcon from "@material-ui/icons/EqualizerSharp";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

interface NavItemProps extends ListItemProps {
  active?: boolean;
  children?: ReactNode;
  depth: number;
  icon?: ReactNode;
  info?: ReactNode;
  open?: boolean;
  path?: string;
  title: string;
}

const NavItem: FC<NavItemProps> = (props) => {
  const {
    active,
    children,
    depth,
    icon,
    info,
    open: openProp,
    path,
    title,
    ...other
  } = props;
  const [open, setOpen] = useState<boolean>(openProp);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 16;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  if (children) {
    return (
      <ListItem
        disableGutters
        sx={{
          display: "block",
          py: 0,
        }}
        {...other}
      >
        <Button
          endIcon={
            !open ? (
              <ChevronRightIcon fontSize="small" />
            ) : (
              <ChevronLeftIcon fontSize="small" />
            )
          }
          onClick={handleToggle}
          startIcon={icon}
          sx={{
            color: "text.secondary",
            fontWeight: "fontWeightMedium",
            justifyContent: "flex-start",
            pl: `${paddingLeft}px`,
            pr: "8px",
            py: "12px",
            textAlign: "left",
            textTransform: "none",
            width: "100%",
          }}
          variant="text"
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
          {info}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        py: 0,
      }}
    >
      <Button
        component={path && RemixLink}
        startIcon={icon}
        sx={{
          color: "text.secondary",
          fontWeight: "fontWeightMedium",
          justifyContent: "flex-start",
          textAlign: "left",
          pl: `${paddingLeft}px`,
          pr: "8px",
          py: "12px",
          textTransform: "none",
          width: "100%",
          ...(active && {
            color: "primary.main",
            fontWeight: "fontWeightBold",
            "& svg": {
              color: "primary.main",
            },
          }),
        }}
        variant="text"
        to={path}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
        {info}
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  depth: PropTypes.number.isRequired,
  icon: PropTypes.node,
  info: PropTypes.node,
  open: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  active: false,
  open: false,
};

export default NavItem;
