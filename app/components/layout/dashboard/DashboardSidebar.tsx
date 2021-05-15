import {
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  Typography,
} from "@material-ui/core";

import Hidden from "@material-ui/core/Hidden";

import Avatar from "@material-ui/core/Avatar";

import type { FC } from "react";
import { useEffect } from "react";
import Logo from "../../helper/Logo";
import useAuth from "../../../hooks/useAuth";
import ChartPieIcon from "../../../icons/ChartPie";
import ChartSquareBarIcon from "../../../icons/ChartSquareBar";
import ShoppingBagIcon from "../../../icons/ShoppingBag";
import UserIcon from "../../../icons/User";
import NavSection from "./NavSection";
import Scrollbar from "../../helper/Scrollbar";
import { Link as RemixLink } from "remix";
import { useLocation } from "react-router";

import MenuIcon from "@material-ui/icons/Menu";
import EqualizerSharpIcon from "@material-ui/icons/EqualizerSharp";
import DonutSmallSharpIcon from "@material-ui/icons/DonutSmallSharp";
import LocalMall from "@material-ui/icons/LocalMall";
import PersonIcon from "@material-ui/icons/Person";
import ShareIcon from "@material-ui/icons/Share";
import TodayIcon from "@material-ui/icons/Today";
import ChatIcon from "@material-ui/icons/Chat";
import AssignmentIcon from "@material-ui/icons/Assignment";
import WorkIcon from "@material-ui/icons/Work";
import GroupIcon from "@material-ui/icons/Group";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import ReceiptIcon from "@material-ui/icons/Receipt";

interface DashboardSidebarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

const sections = [
  {
    title: "General",
    items: [
      {
        title: "Overview",
        path: "/dashboard",
        icon: <EqualizerSharpIcon />,
      },
      {
        title: "Analytics",
        path: "/dashboard/analytics",
        icon: <DonutSmallSharpIcon />,
      },
      {
        title: "Finance",
        path: "/dashboard/finance",
        icon: <LocalMall />,
      },
      {
        title: "Account",
        path: "/dashboard/account",
        icon: <PersonIcon />,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Customers",
        path: "/dashboard/customers",
        icon: <GroupIcon fontSize="small" />,
        children: [
          {
            title: "List",
            path: "/dashboard/customers",
          },
          {
            title: "Details",
            path: "/dashboard/customers/1",
          },
          {
            title: "Edit",
            path: "/dashboard/customers/1/edit",
          },
        ],
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingCartIcon fontSize="small" />,
        children: [
          {
            title: "List",
            path: "/dashboard/products",
          },
          {
            title: "Create",
            path: "/dashboard/products/new",
          },
        ],
      },
      {
        title: "Orders",
        icon: <FolderOpenIcon fontSize="small" />,
        path: "/dashboard/orders",
        children: [
          {
            title: "List",
            path: "/dashboard/orders",
          },
          {
            title: "Details",
            path: "/dashboard/orders/1",
          },
        ],
      },
      {
        title: "Invoices",
        path: "/dashboard/invoices",
        icon: <ReceiptIcon fontSize="small" />,
        children: [
          {
            title: "List",
            path: "/dashboard/invoices",
          },
          {
            title: "Details",
            path: "/dashboard/invoices/1",
          },
        ],
      },
    ],
  },
  {
    title: "Platforms",
    items: [
      {
        title: "Projects",
        path: "/dashboard/projects",
        icon: <WorkIcon fontSize="small" />,
        children: [
          {
            title: "Browse",
            path: "/dashboard/projects/browse",
          },
          {
            title: "Details",
            path: "/dashboard/projects/1",
          },
          {
            title: "Create",
            path: "/dashboard/projects/new",
          },
        ],
      },
      {
        title: "Social",
        path: "/dashboard/social",
        icon: <ShareIcon fontSize="small" />,
        children: [
          {
            title: "Profile",
            path: "/dashboard/social/profile",
          },
          {
            title: "Feed",
            path: "/dashboard/social/feed",
          },
        ],
      },
    ],
  },

  {
    title: "Apps",
    items: [
      {
        title: "Kanban",
        path: "/dashboard/kanban",
        icon: <AssignmentIcon fontSize="small" />,
      },
      {
        title: "Mail",
        path: "/dashboard/mail",
        icon: <TodayIcon fontSize="small" />,
      },
      {
        title: "Chat",
        path: "/dashboard/chat",
        icon: <ChatIcon fontSize="small" />,
      },
      {
        title: "Calendar",
        path: "/dashboard/calendar",
        icon: <TodayIcon fontSize="small" />,
      },
    ],
  },
];

const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 2,
          }}
        >
          <RemixLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40,
              }}
            />
          </RemixLink>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "background.default",
              borderRadius: 1,
              display: "flex",
              overflow: "hidden",
              p: 2,
            }}
          >
            <RemixLink to="/dashboard/account">
              <Avatar
                src={user?.avatar}
                sx={{
                  cursor: "pointer",
                  height: 48,
                  width: 48,
                }}
              >
                U
              </Avatar>
            </RemixLink>
            <Box sx={{ ml: 2 }}>
              <Typography color="textPrimary" variant="subtitle2">
                {user?.name}
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Your plan:{" "}
                <Link color="primary" component={RemixLink} to="/pricing">
                  {user?.plan}
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                "& + &": {
                  mt: 3,
                },
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography color="textPrimary" variant="subtitle2">
            Need Help?
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Check our docs
          </Typography>
          <Button
            color="primary"
            component={RemixLink}
            fullWidth
            sx={{ mt: 2 }}
            to="/docs"
            variant="contained"
          >
            Documentation
          </Button>
        </Box>
      </Scrollbar>
    </Box>
  );

  return (
    <>
      {/* <Hidden lgUp> */}
      <Drawer
        anchor="left"
        onClose={onMobileClose}
        open
        // open={openMobile}
        PaperProps={{
          sx: {
            backgroundColor: "background.paper",
            width: 280,
          },
        }}
        variant="persistent"
      >
        {content}
      </Drawer>
      {/* </Hidden> */}
      {/* <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "background.paper",
            height: "calc(100% - 64px) !important",
            top: "64px !Important",
            width: 280,
          },
        }}
        variant="persistent"
      >
        {content}
      </Drawer> */}
    </>
  );
};

DashboardSidebar.propTypes = {
  // onMobileClose: PropTypes.func,
  // openMobile: PropTypes.bool,
};

export default DashboardSidebar;
