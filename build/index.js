var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __objSpread = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// <stdin>
__markAsModule(exports);
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = import_server.default.renderToString(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: __objSpread(__objSpread({}, Object.fromEntries(responseHeaders)), {
      "Content-Type": "text/html"
    })
  });
}

// route-module:/Users/sirum/code/remix/learn-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});

// app/components/layout/dashboard/base.tsx
var import_core11 = __toModule(require("@material-ui/core"));

// app/components/layout/dashboard/DashboardNavbar.tsx
var import_prop_types4 = __toModule(require("prop-types"));
var import_core7 = __toModule(require("@material-ui/core"));
var import_styles3 = __toModule(require("@material-ui/core/styles"));

// app/icons/Menu.tsx
var import_react = __toModule(require("react"));
var Menu = (props) => {
  return /* @__PURE__ */ import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};
var Menu_default = Menu;

// app/components/popover/AccountPopover.tsx
var import_react5 = __toModule(require("react"));
var import_react_router_dom = __toModule(require("react-router-dom"));
var import_notistack = __toModule(require("notistack"));
var import_core = __toModule(require("@material-ui/core"));

// app/hooks/useAuth.ts
var import_react3 = __toModule(require("react"));

// app/contexts/JWTContext.tsx
var import_react2 = __toModule(require("react"));
var import_prop_types = __toModule(require("prop-types"));

// app/lib/axios.ts
var import_axios = __toModule(require("axios"));
var import_axios_mock_adapter = __toModule(require("axios-mock-adapter"));
var axiosInstance = import_axios.default.create();
axiosInstance.interceptors.response.use((response) => response, (error) => Promise.reject(error.response && error.response.data || "Something went wrong"));
var mock = new import_axios_mock_adapter.default(axiosInstance, {delayResponse: 0});
var axios_default = axiosInstance;

// app/utils/jwt.ts
var JWT_SECRET = "devias-top-secret-key";
var JWT_EXPIRES_IN = 3600 * 24 * 2;
var verify = (token, privateKey) => {
  const [encodedHeader, encodedPayload, signature] = token.split(".");
  const header = JSON.parse(atob(encodedHeader));
  const payload = JSON.parse(atob(encodedPayload));
  const now2 = new Date();
  if (now2 < header.expiresIn) {
    throw new Error("Expired token");
  }
  const verifiedSignature = btoa(Array.from(encodedPayload).map((item, key) => String.fromCharCode(item.charCodeAt(0) ^ privateKey[key % privateKey.length].charCodeAt(0))).join(""));
  if (verifiedSignature !== signature) {
    throw new Error("Invalid signature");
  }
  return payload;
};

// app/contexts/JWTContext.tsx
var initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};
var setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios_default.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios_default.defaults.headers.common.Authorization;
  }
};
var handlers = {
  INITIALIZE: (state, action) => {
    const {isAuthenticated, user} = action.payload;
    return __objSpread(__objSpread({}, state), {
      isAuthenticated,
      isInitialized: true,
      user
    });
  },
  LOGIN: (state, action) => {
    const {user} = action.payload;
    return __objSpread(__objSpread({}, state), {
      isAuthenticated: true,
      user
    });
  },
  LOGOUT: (state) => __objSpread(__objSpread({}, state), {
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state, action) => {
    const {user} = action.payload;
    return __objSpread(__objSpread({}, state), {
      isAuthenticated: true,
      user
    });
  }
};
var reducer = (state, action) => handlers[action.type] ? handlers[action.type](state, action) : state;
var AuthContext = (0, import_react2.createContext)(__objSpread(__objSpread({}, initialState), {
  platform: "JWT",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
}));
var AuthProvider = (props) => {
  const {children} = props;
  const [state, dispatch] = (0, import_react2.useReducer)(reducer, initialState);
  (0, import_react2.useEffect)(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");
        if (accessToken && verify(accessToken, JWT_SECRET)) {
          setSession(accessToken);
          const response = await axios_default.get("/api/identity/me");
          const {user} = response.data;
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user
            }
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };
    initialize();
  }, []);
  const login = async (email, password) => {
    const response = await axios_default.post("/api/authentication/login", {
      email,
      password
    });
    const {accessToken, user} = response.data;
    setSession(accessToken);
    dispatch({
      type: "LOGIN",
      payload: {
        user
      }
    });
  };
  const logout = async () => {
    setSession(null);
    dispatch({type: "LOGOUT"});
  };
  const register = async (email, name, password) => {
    const response = await axios_default.post("/api/authentication/register", {
      email,
      name,
      password
    });
    const {accessToken, user} = response.data;
    window.localStorage.setItem("accessToken", accessToken);
    dispatch({
      type: "REGISTER",
      payload: {
        user
      }
    });
  };
  return /* @__PURE__ */ React.createElement(AuthContext.Provider, {
    value: __objSpread(__objSpread({}, state), {
      platform: "JWT",
      login,
      logout,
      register
    })
  }, children);
};
AuthProvider.propTypes = {
  children: import_prop_types.default.node.isRequired
};
var JWTContext_default = AuthContext;

// app/hooks/useAuth.ts
var useAuth = () => (0, import_react3.useContext)(JWTContext_default);
var useAuth_default = useAuth;

// app/icons/User.tsx
var import_react4 = __toModule(require("react"));
var User = (props) => {
  return /* @__PURE__ */ import_react4.default.createElement("svg", __objSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /* @__PURE__ */ import_react4.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    clipRule: "evenodd"
  }));
};
var User_default = User;

// app/components/popover/AccountPopover.tsx
var AccountPopover = () => {
  const anchorRef = (0, import_react5.useRef)(null);
  const {user, logout} = useAuth_default();
  const navigate = (0, import_react_router_dom.useNavigate)();
  const {enqueueSnackbar} = (0, import_notistack.useSnackbar)();
  const [open, setOpen] = (0, import_react5.useState)(false);
  if (!user)
    return null;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = async () => {
    try {
      handleClose();
      await logout();
      navigate("/");
    } catch (err) {
      console.error(err);
      enqueueSnackbar("Unable to logout", {
        anchorOrigin: {
          horizontal: "right",
          vertical: "top"
        },
        variant: "error"
      });
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core.Box, {
    component: import_core.ButtonBase,
    onClick: handleOpen,
    ref: anchorRef,
    sx: {
      alignItems: "center",
      display: "flex"
    }
  }, /* @__PURE__ */ React.createElement(import_core.Avatar, {
    src: user == null ? void 0 : user.avatar,
    sx: {
      height: 32,
      width: 32
    }
  })), /* @__PURE__ */ React.createElement(import_core.Popover, {
    anchorEl: anchorRef.current,
    anchorOrigin: {
      horizontal: "center",
      vertical: "bottom"
    },
    getContentAnchorEl: null,
    keepMounted: true,
    onClose: handleClose,
    open,
    PaperProps: {
      sx: {width: 240}
    }
  }, /* @__PURE__ */ React.createElement(import_core.Box, {
    sx: {p: 2}
  }, /* @__PURE__ */ React.createElement(import_core.Typography, {
    color: "textPrimary",
    variant: "subtitle2"
  }, user.name), /* @__PURE__ */ React.createElement(import_core.Typography, {
    color: "textSecondary",
    variant: "subtitle2"
  }, "Devias IO")), /* @__PURE__ */ React.createElement(import_core.Divider, null), /* @__PURE__ */ React.createElement(import_core.Box, {
    sx: {mt: 2}
  }, /* @__PURE__ */ React.createElement(import_core.MenuItem, {
    component: import_react_router_dom.Link,
    to: "/dashboard/social/profile"
  }, /* @__PURE__ */ React.createElement(import_core.ListItemIcon, null, /* @__PURE__ */ React.createElement(User_default, {
    fontSize: "small"
  })), /* @__PURE__ */ React.createElement(import_core.ListItemText, {
    primary: /* @__PURE__ */ React.createElement(import_core.Typography, {
      color: "textPrimary",
      variant: "subtitle2"
    }, "Profile")
  })), /* @__PURE__ */ React.createElement(import_core.MenuItem, {
    component: import_react_router_dom.Link,
    to: "/dashboard/account"
  }, /* @__PURE__ */ React.createElement(import_core.ListItemIcon, null, /* @__PURE__ */ React.createElement(User_default, {
    fontSize: "small"
  })), /* @__PURE__ */ React.createElement(import_core.ListItemText, {
    primary: /* @__PURE__ */ React.createElement(import_core.Typography, {
      color: "textPrimary",
      variant: "subtitle2"
    }, "Settings")
  }))), /* @__PURE__ */ React.createElement(import_core.Box, {
    sx: {p: 2}
  }, /* @__PURE__ */ React.createElement(import_core.Button, {
    color: "primary",
    fullWidth: true,
    onClick: handleLogout,
    variant: "outlined"
  }, "Logout"))));
};
var AccountPopover_default = AccountPopover;

// app/components/popover/ContactsPopover.tsx
var import_react6 = __toModule(require("react"));
var import_date_fns = __toModule(require("date-fns"));
var import_core2 = __toModule(require("@material-ui/core"));
var import_icons = __toModule(require("@material-ui/icons/"));

// app/slices/chat.ts
var import_toolkit = __toModule(require("@reduxjs/toolkit"));

// app/utils/objFromArray.ts
var objFromArray = (arr, key = "id") => arr.reduce((accumulator, current) => {
  accumulator[current[key]] = current;
  return accumulator;
}, {});
var objFromArray_default = objFromArray;

// app/slices/chat.ts
var initialState2 = {
  activeThreadId: null,
  contacts: {
    byId: {},
    allIds: []
  },
  threads: {
    byId: {},
    allIds: []
  },
  participants: [],
  recipients: []
};
var slice = (0, import_toolkit.createSlice)({
  name: "chat",
  initialState: initialState2,
  reducers: {
    getContacts(state, action) {
      const {contacts} = action.payload;
      state.contacts.byId = objFromArray_default(contacts);
      state.contacts.allIds = Object.keys(state.contacts.byId);
    },
    getThreads(state, action) {
      const {threads} = action.payload;
      state.threads.byId = objFromArray_default(threads);
      state.threads.allIds = Object.keys(state.threads.byId);
    },
    getThread(state, action) {
      const {thread} = action.payload;
      if (thread) {
        state.threads.byId[thread.id] = thread;
        state.activeThreadId = thread.id;
        if (!state.threads.allIds.includes(thread.id)) {
          state.threads.allIds.push(thread.id);
        }
      } else {
        state.activeThreadId = null;
      }
    },
    markThreadAsSeen(state, action) {
      const {threadId} = action.payload;
      const thread = state.threads.byId[threadId];
      if (thread) {
        thread.unreadCount = 0;
      }
    },
    resetActiveThread(state) {
      state.activeThreadId = null;
    },
    getParticipants(state, action) {
      const {participants} = action.payload;
      state.participants = participants;
    },
    addRecipient(state, action) {
      const {recipient} = action.payload;
      const exists = state.recipients.find((_recipient) => _recipient.id === recipient.id);
      if (!exists) {
        state.recipients.push(recipient);
      }
    },
    removeRecipient(state, action) {
      const {recipientId} = action.payload;
      state.recipients = state.recipients.filter((recipient) => recipient.id !== recipientId);
    }
  }
});
var {reducer: reducer2} = slice;
var getContacts = () => async (dispatch) => {
  const response = await axios_default.get("/api/chat/contacts");
  dispatch(slice.actions.getContacts(response.data));
};

// app/store/index.ts
var import_react_redux = __toModule(require("react-redux"));
var import_toolkit6 = __toModule(require("@reduxjs/toolkit"));

// app/store/rootReducer.ts
var import_toolkit5 = __toModule(require("@reduxjs/toolkit"));

// app/slices/calendar.ts
var import_toolkit2 = __toModule(require("@reduxjs/toolkit"));
var initialState3 = {
  events: [],
  isModalOpen: false,
  selectedEventId: null,
  selectedRange: null
};
var slice2 = (0, import_toolkit2.createSlice)({
  name: "calendar",
  initialState: initialState3,
  reducers: {
    getEvents(state, action) {
      const {events} = action.payload;
      state.events = events;
    },
    createEvent(state, action) {
      const {event} = action.payload;
      state.events.push(event);
    },
    selectEvent(state, action) {
      const {eventId = null} = action.payload;
      state.isModalOpen = true;
      state.selectedEventId = eventId;
    },
    updateEvent(state, action) {
      const {event} = action.payload;
      state.events = state.events.map((_event) => {
        if (_event.id === event.id) {
          return event;
        }
        return _event;
      });
    },
    deleteEvent(state, action) {
      const {eventId} = action.payload;
      state.events = state.events.filter((event) => event.id !== eventId);
    },
    selectRange(state, action) {
      const {start, end} = action.payload;
      state.isModalOpen = true;
      state.selectedRange = {
        start,
        end
      };
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedEventId = null;
      state.selectedRange = null;
    }
  }
});
var {reducer: reducer3} = slice2;

// app/slices/kanban.ts
var import_toolkit3 = __toModule(require("@reduxjs/toolkit"));
var initialState4 = {
  isLoaded: false,
  columns: {
    byId: {},
    allIds: []
  },
  cards: {
    byId: {},
    allIds: []
  },
  members: {
    byId: {},
    allIds: []
  }
};
var slice3 = (0, import_toolkit3.createSlice)({
  name: "kanban",
  initialState: initialState4,
  reducers: {
    getBoard(state, action) {
      const {board} = action.payload;
      state.columns.byId = objFromArray_default(board.columns);
      state.columns.allIds = Object.keys(state.columns.byId);
      state.cards.byId = objFromArray_default(board.cards);
      state.cards.allIds = Object.keys(state.cards.byId);
      state.members.byId = objFromArray_default(board.members);
      state.members.allIds = Object.keys(state.members.byId);
      state.isLoaded = true;
    },
    createColumn(state, action) {
      const {column} = action.payload;
      state.columns.byId[column.id] = column;
      state.columns.allIds.push(column.id);
    },
    updateColumn(state, action) {
      const {column} = action.payload;
      state.columns.byId[column.id] = column;
    },
    clearColumn(state, action) {
      const {columnId} = action.payload;
      const {cardIds} = state.columns.byId[columnId];
      state.columns.byId[columnId].cardIds = [];
      cardIds.forEach((cardId) => {
        delete state.cards.byId[cardId];
      });
      state.cards.allIds = state.cards.allIds.filter((cardId) => cardIds.includes(cardId));
    },
    deleteColumn(state, action) {
      const {columnId} = action.payload;
      delete state.columns.byId[columnId];
      state.columns.allIds = state.columns.allIds.filter((_listId) => _listId !== columnId);
    },
    createCard(state, action) {
      const {card} = action.payload;
      state.cards.byId[card.id] = card;
      state.cards.allIds.push(card.id);
      state.columns.byId[card.columnId].cardIds.push(card.id);
    },
    updateCard(state, action) {
      const {card} = action.payload;
      Object.assign(state.cards.byId[card.id], card);
    },
    moveCard(state, action) {
      const {cardId, position, columnId} = action.payload;
      const sourceColumnId = state.cards.byId[cardId].columnId;
      state.columns.byId[sourceColumnId].cardIds = state.columns.byId[sourceColumnId].cardIds.filter((_cardId) => _cardId !== cardId);
      if (columnId) {
        state.cards.byId[cardId].columnId = columnId;
        state.columns.byId[columnId].cardIds.splice(position, 0, cardId);
      } else {
        state.columns.byId[sourceColumnId].cardIds.splice(position, 0, cardId);
      }
    },
    deleteCard(state, action) {
      const {cardId} = action.payload;
      const {columnId} = state.cards.byId[cardId];
      delete state.cards.byId[cardId];
      state.cards.allIds = state.cards.allIds.filter((_cardId) => _cardId !== cardId);
      state.columns.byId[columnId].cardIds = state.columns.byId[columnId].cardIds.filter((_cardId) => _cardId !== cardId);
    },
    addComment(state, action) {
      const {comment} = action.payload;
      const card = state.cards.byId[comment.cardId];
      card.comments.push(comment);
    },
    addChecklist(state, action) {
      const {cardId, checklist} = action.payload;
      const card = state.cards.byId[cardId];
      card.checklists.push(checklist);
    },
    updateChecklist(state, action) {
      const {cardId, checklist} = action.payload;
      const card = state.cards.byId[cardId];
      card.checklists = card.checklists.map((_checklist) => {
        if (_checklist.id === checklist.id) {
          return checklist;
        }
        return _checklist;
      });
    },
    deleteChecklist(state, action) {
      const {cardId, checklistId} = action.payload;
      const card = state.cards.byId[cardId];
      card.checklists = card.checklists.filter((checklist) => checklist.id !== checklistId);
    },
    addCheckItem(state, action) {
      const {cardId, checklistId, checkItem} = action.payload;
      const card = state.cards.byId[cardId];
      const checklist = card.checklists.find((_checklist) => _checklist.id === checklistId);
      checklist.checkItems.push(checkItem);
    },
    updateCheckItem(state, action) {
      const {cardId, checklistId, checkItem} = action.payload;
      const card = state.cards.byId[cardId];
      const checklist = card.checklists.find((_checklist) => _checklist.id === checklistId);
      checklist.checkItems = checklist.checkItems.map((_checkItem) => {
        if (_checkItem.id === checkItem.id) {
          return checkItem;
        }
        return _checkItem;
      });
    },
    deleteCheckItem(state, action) {
      const {cardId, checklistId, checkItemId} = action.payload;
      const card = state.cards.byId[cardId];
      const checklist = card.checklists.find((_checklist) => _checklist.id === checklistId);
      checklist.checkItems = checklist.checkItems.filter((checkItem) => checkItem.id !== checkItemId);
    }
  }
});
var {reducer: reducer4} = slice3;

// app/slices/mail.ts
var import_toolkit4 = __toModule(require("@reduxjs/toolkit"));
var initialState5 = {
  emails: {
    byId: {},
    allIds: []
  },
  labels: [],
  isSidebarOpen: false,
  isComposeOpen: false
};
var slice4 = (0, import_toolkit4.createSlice)({
  name: "mail",
  initialState: initialState5,
  reducers: {
    getLabels(state, action) {
      const {labels} = action.payload;
      state.labels = labels;
    },
    getEmails(state, action) {
      const {emails} = action.payload;
      state.emails.byId = objFromArray_default(emails);
      state.emails.allIds = Object.keys(state.emails.byId);
    },
    getEmail(state, action) {
      const {email} = action.payload;
      state.emails.byId[email.id] = email;
      if (!state.emails.allIds.includes(email.id)) {
        state.emails.allIds.push(email.id);
      }
    },
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
    openCompose(state) {
      state.isComposeOpen = true;
    },
    closeCompose(state) {
      state.isComposeOpen = false;
    }
  }
});
var {reducer: reducer5} = slice4;

// app/store/rootReducer.ts
var rootReducer = (0, import_toolkit5.combineReducers)({
  calendar: reducer3,
  chat: reducer2,
  kanban: reducer4,
  mail: reducer5
});
var rootReducer_default = rootReducer;

// app/store/index.ts
var store = (0, import_toolkit6.configureStore)({
  reducer: rootReducer_default,
  devTools: true
});
var useSelector = import_react_redux.useSelector;
var useDispatch = () => (0, import_react_redux.useDispatch)();
var store_default = store;

// app/components/helper/StatusIndicator.tsx
var import_prop_types2 = __toModule(require("prop-types"));
var import_styles = __toModule(require("@material-ui/core/styles"));
var sizes = {
  small: 8,
  medium: 16,
  large: 23
};
var colors = {
  offline: "#fafafa",
  away: "#fb8c00",
  busy: "#e53935",
  online: "#43a047"
};
var StatusIndicatorRoot = (0, import_styles.experimentalStyled)("span")(({styleProps}) => {
  const size = sizes[styleProps.size];
  const color = colors[styleProps.status];
  return {
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
    flexGrow: 0,
    flexShrink: 0,
    height: size,
    width: size
  };
});
var StatusIndicator = (props) => {
  const _a = props, {size, status} = _a, other = __objRest(_a, ["size", "status"]);
  const styleProps = {size, status};
  return /* @__PURE__ */ React.createElement(StatusIndicatorRoot, __objSpread({
    styleProps
  }, other));
};
StatusIndicator.propTypes = {
  size: import_prop_types2.default.oneOf(["small", "medium", "large"]),
  status: import_prop_types2.default.oneOf(["online", "offline", "away", "busy"])
};
StatusIndicator.defaultProps = {
  size: "medium",
  status: "offline"
};
var StatusIndicator_default = StatusIndicator;

// app/components/popover/ContactsPopover.tsx
var ContactsPopover = () => {
  const dispatch = useDispatch();
  const anchorRef = (0, import_react6.useRef)(null);
  const {contacts} = useSelector((state) => state.chat);
  const [open, setOpen] = (0, import_react6.useState)(false);
  (0, import_react6.useEffect)(() => {
    dispatch(getContacts());
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core2.Tooltip, {
    title: "Contacts"
  }, /* @__PURE__ */ React.createElement(import_core2.IconButton, {
    color: "inherit",
    onClick: handleOpen,
    ref: anchorRef
  }, /* @__PURE__ */ React.createElement(import_icons.Group, {
    fontSize: "small"
  }))), /* @__PURE__ */ React.createElement(import_core2.Popover, {
    anchorEl: anchorRef.current,
    anchorOrigin: {
      horizontal: "center",
      vertical: "bottom"
    },
    onClose: handleClose,
    open,
    PaperProps: {
      sx: {
        p: 2,
        width: 320
      }
    }
  }, /* @__PURE__ */ React.createElement(import_core2.Typography, {
    color: "textPrimary",
    variant: "h6"
  }, "Contacts"), /* @__PURE__ */ React.createElement(import_core2.Box, {
    sx: {mt: 2}
  }, /* @__PURE__ */ React.createElement(import_core2.List, {
    disablePadding: true
  }, contacts.allIds.map((contactId) => {
    const contact = contacts.byId[contactId];
    return /* @__PURE__ */ React.createElement(import_core2.ListItem, {
      disableGutters: true,
      key: contact.id
    }, /* @__PURE__ */ React.createElement(import_core2.ListItemAvatar, null, /* @__PURE__ */ React.createElement(import_core2.Avatar, {
      src: contact.avatar
    })), /* @__PURE__ */ React.createElement(import_core2.ListItemText, {
      disableTypography: true,
      primary: /* @__PURE__ */ React.createElement(import_core2.Link, {
        color: "textPrimary",
        display: "block",
        noWrap: true,
        underline: "none",
        variant: "subtitle2"
      }, contact.name)
    }), contact.isActive ? /* @__PURE__ */ React.createElement(StatusIndicator_default, {
      size: "small",
      status: "online"
    }) : /* @__PURE__ */ React.createElement(import_core2.Typography, {
      color: "textSecondary",
      noWrap: true,
      variant: "caption"
    }, (0, import_date_fns.formatDistanceToNowStrict)(contact.lastActivity), " ago"));
  })))));
};
var ContactsPopover_default = ContactsPopover;

// app/components/search/ContentSearch.tsx
var import_react9 = __toModule(require("react"));
var import_react_router_dom2 = __toModule(require("react-router-dom"));
var import_core4 = __toModule(require("@material-ui/core"));

// app/components/helper/Scrollbar.tsx
var import_react7 = __toModule(require("react"));
var import_prop_types3 = __toModule(require("prop-types"));
var import_react_perfect_scrollbar = __toModule(require("react-perfect-scrollbar"));
var import_core3 = __toModule(require("@material-ui/core"));
var import_react8 = __toModule(require("react"));
var Scrollbar = (0, import_react7.forwardRef)((props, ref) => {
  const _a = props, {children} = _a, other = __objRest(_a, ["children"]);
  const [isMobile, setIsMobile] = import_react8.default.useState(false);
  import_react8.default.useEffect(() => {
    const isMobile2 = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
    setIsMobile(isMobile2);
  }, []);
  if (isMobile) {
    return /* @__PURE__ */ import_react8.default.createElement(import_core3.Box, {
      ref,
      sx: {overflowX: "auto"}
    }, children);
  }
  return /* @__PURE__ */ import_react8.default.createElement(import_react_perfect_scrollbar.default, __objSpread({
    ref
  }, other), children);
});
Scrollbar.propTypes = {
  children: import_prop_types3.default.node
};
var Scrollbar_default = Scrollbar;

// app/utils/wait.ts
var wait = (time) => new Promise((res) => setTimeout(res, time));
var wait_default = wait;

// app/components/search/ContentSearch.tsx
var import_icons2 = __toModule(require("@material-ui/icons"));
var results = [
  {
    description: "Algolia broadly consists of two parts: search implementation and search analytics. We provide tools that make it easy for your developers...",
    title: "What does Algolia do?"
  },
  {
    description: "To be clear, search doesn\u2019t know the direction that your business should take. However, it can help you gather information on what your customers want...",
    title: "Search as a feedback loop"
  },
  {
    description: "Algolia provides your users with a fast and rich search experience. Your Algolia search interface can contain a search bar, filters, infinite scrolling...",
    title: "What can Algolia do for my users?"
  }
];
var ContentSearch = () => {
  const [value, setValue] = (0, import_react9.useState)("");
  const [open, setOpen] = (0, import_react9.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react9.useState)(false);
  const [showResults, setShowResults] = (0, import_react9.useState)(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const search = async () => {
    setShowResults(false);
    setIsLoading(true);
    await wait_default(1500);
    setIsLoading(false);
    setShowResults(true);
  };
  const handleClick = () => {
    search();
  };
  const handleKeyUp = (event) => {
    if (event.code === "Enter") {
      search();
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core4.Tooltip, {
    title: "Search"
  }, /* @__PURE__ */ React.createElement(import_core4.IconButton, {
    color: "inherit",
    onClick: handleOpen
  }, /* @__PURE__ */ React.createElement(import_icons2.Search, {
    fontSize: "small"
  }))), /* @__PURE__ */ React.createElement(import_core4.Drawer, {
    anchor: "top",
    ModalProps: {BackdropProps: {invisible: true}},
    onClose: handleClose,
    open,
    PaperProps: {
      sx: {width: "100%"}
    },
    variant: "temporary"
  }, /* @__PURE__ */ React.createElement(import_core4.Box, {
    sx: {p: 3}
  }, /* @__PURE__ */ React.createElement(import_core4.Box, {
    sx: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /* @__PURE__ */ React.createElement(import_core4.IconButton, {
    onClick: handleClose
  }, /* @__PURE__ */ React.createElement(import_icons2.Close, {
    fontSize: "small"
  })))), /* @__PURE__ */ React.createElement(import_core4.Box, {
    sx: {p: 3}
  }, /* @__PURE__ */ React.createElement(import_core4.Container, {
    maxWidth: "md"
  }, /* @__PURE__ */ React.createElement(import_core4.Box, {
    sx: {
      alignItems: "center",
      display: "flex"
    }
  }, /* @__PURE__ */ React.createElement(import_core4.TextField, {
    fullWidth: true,
    InputProps: {
      startAdornment: /* @__PURE__ */ React.createElement(import_core4.InputAdornment, {
        position: "start"
      }, /* @__PURE__ */ React.createElement(User_default, {
        fontSize: "small"
      }))
    },
    onChange: (event) => setValue(event.target.value),
    onKeyUp: handleKeyUp,
    placeholder: "Search...",
    value
  }), /* @__PURE__ */ React.createElement(import_core4.Button, {
    color: "primary",
    onClick: handleClick,
    size: "large",
    sx: {ml: 2},
    variant: "contained"
  }, "Search")), /* @__PURE__ */ React.createElement(import_core4.Box, {
    sx: {mt: 3}
  }, /* @__PURE__ */ React.createElement(Scrollbar_default, {
    options: {suppressScrollX: true}
  }, isLoading ? /* @__PURE__ */ React.createElement(import_core4.Box, {
    sx: {
      display: "flex",
      justifyContent: "center"
    }
  }, /* @__PURE__ */ React.createElement(import_core4.CircularProgress, null)) : /* @__PURE__ */ React.createElement(React.Fragment, null, showResults && /* @__PURE__ */ React.createElement(React.Fragment, null, results.map((result, i) => /* @__PURE__ */ React.createElement(import_core4.Box, {
    key: i,
    sx: {mb: 2}
  }, /* @__PURE__ */ React.createElement(import_core4.Link, {
    color: "textPrimary",
    component: import_react_router_dom2.Link,
    to: "/dashboard",
    variant: "h5"
  }, result.title), /* @__PURE__ */ React.createElement(import_core4.Typography, {
    color: "textPrimary",
    variant: "body2"
  }, result.description)))))))))));
};
var ContentSearch_default = ContentSearch;

// app/components/popover/LanguagePopover.tsx
var import_react10 = __toModule(require("react"));
var import_react_i18next = __toModule(require("react-i18next"));
var import_core5 = __toModule(require("@material-ui/core"));
var languageOptions = {
  en: {
    icon: "/static/icons/uk_flag.svg",
    label: "English"
  },
  de: {
    icon: "/static/icons/de_flag.svg",
    label: "German"
  },
  es: {
    icon: "/static/icons/es_flag.svg",
    label: "Spanish"
  }
};
var LanguagePopover = () => {
  const anchorRef = (0, import_react10.useRef)(null);
  const {i18n, t} = (0, import_react_i18next.useTranslation)("common");
  const [open, setOpen] = (0, import_react10.useState)(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setOpen(false);
  };
  const selectedOption = languageOptions[i18n.language];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core5.IconButton, {
    onClick: handleOpen,
    ref: anchorRef
  }, /* @__PURE__ */ React.createElement(import_core5.Box, {
    sx: {
      display: "flex",
      height: 20,
      width: 20,
      "& img": {
        width: "100%"
      }
    }
  }, /* @__PURE__ */ React.createElement("img", {
    alt: selectedOption.label,
    src: selectedOption.icon
  }))), /* @__PURE__ */ React.createElement(import_core5.Popover, {
    anchorEl: anchorRef.current,
    anchorOrigin: {
      horizontal: "center",
      vertical: "bottom"
    },
    keepMounted: true,
    onClose: handleClose,
    open,
    PaperProps: {
      sx: {width: 240}
    }
  }, Object.keys(languageOptions).map((language) => /* @__PURE__ */ React.createElement(import_core5.MenuItem, {
    onClick: () => handleChangeLanguage(language),
    key: language
  }, /* @__PURE__ */ React.createElement(import_core5.ListItemIcon, null, /* @__PURE__ */ React.createElement(import_core5.Box, {
    sx: {
      display: "flex",
      height: 20,
      width: 20,
      "& img": {
        width: "100%"
      }
    }
  }, /* @__PURE__ */ React.createElement("img", {
    alt: languageOptions[language].label,
    src: languageOptions[language].icon
  }))), /* @__PURE__ */ React.createElement(import_core5.ListItemText, {
    primary: /* @__PURE__ */ React.createElement(import_core5.Typography, {
      color: "textPrimary",
      variant: "subtitle2"
    }, languageOptions[language].label)
  })))));
};
var LanguagePopover_default = LanguagePopover;

// app/components/helper/Logo.tsx
var import_styles2 = __toModule(require("@material-ui/core/styles"));
var LogoRoot = (0, import_styles2.experimentalStyled)("svg")();
var Logo = (props) => /* @__PURE__ */ React.createElement(LogoRoot, __objSpread({
  height: "52",
  version: "1.1",
  viewBox: "0 0 52 52",
  width: "52"
}, props), /* @__PURE__ */ React.createElement("title", null, "MKP"), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", {
  id: "filter"
}, /* @__PURE__ */ React.createElement("feColorMatrix", {
  in: "SourceGraphic",
  type: "matrix",
  values: "0 0 0 0 0.262745 0 0 0 0 0.329412 0 0 0 0 0.866667 0 0 0 1.000000 0"
}))), /* @__PURE__ */ React.createElement("g", {
  fill: "none",
  stroke: "none"
}, /* @__PURE__ */ React.createElement("g", {
  filter: "url(#filter)"
}, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("rect", {
  height: "52",
  width: "52",
  x: "0",
  y: "4.26325641e-14"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M23.2968,26.3643 L11.87,19.9731 C11.606,19.8255 11.3864,19.6106 11.2335,19.3506 C11.0806,19.0905 11,18.7947 11,18.4934 C11,18.1921 11.0806,17.8963 11.2335,17.6362 C11.3864,17.3762 11.606,17.1613 11.87,17.0137 L23.2967,10.6222 C24.026,10.2143 24.8484,10 25.6849,10 C26.5215,10 27.3439,10.2143 28.0731,10.6222 L39.4999,17.0137 C39.7638,17.1613 39.9835,17.3762 40.1364,17.6362 C40.2893,17.8963 40.3699,18.1921 40.3699,18.4934 C40.3699,18.7947 40.2893,19.0905 40.1364,19.3506 C39.9835,19.6106 39.7638,19.8255 39.4999,19.9731 L28.0731,26.3643 C27.3439,26.7722 26.5215,26.9864 25.6849,26.9864 C24.8484,26.9864 24.026,26.7722 23.2968,26.3643 Z",
  fill: "#2196F3",
  fillRule: "nonzero",
  transform: "translate(25.684950, 18.493200) rotate(180.000000) translate(-25.684950, -18.493200) "
}), /* @__PURE__ */ React.createElement("path", {
  d: "M23.2349,37.8879 L6.87,28.7347 C6.6061,28.5871 6.3864,28.3722 6.2335,28.1122 C6.0806,27.8521 6,27.5563 6,27.255 C6,26.9537 6.0806,26.6578 6.2335,26.3978 C6.3864,26.1377 6.6061,25.9229 6.87,25.7752 L23.2349,16.6221 C23.9641,16.2143 24.7865,16 25.623,16 C26.4595,16 27.2819,16.2143 28.0111,16.6221 L44.376,25.7752 C44.6399,25.9229 44.8596,26.1377 45.0125,26.3978 C45.1654,26.6578 45.246,26.9537 45.246,27.255 C45.246,27.5563 45.1654,27.8521 45.0125,28.1122 C44.8596,28.3722 44.6399,28.5871 44.376,28.7347 L28.0111,37.8879 C27.2819,38.2957 26.4595,38.5099 25.623,38.5099 C24.7865,38.5099 23.9641,38.2957 23.2349,37.8879 Z",
  fill: "#2196F3",
  fillRule: "nonzero",
  opacity: "0.7",
  transform: "translate(25.623000, 27.254950) rotate(180.000000) translate(-25.623000, -27.254950) "
}), /* @__PURE__ */ React.createElement("path", {
  d: "M23.6157447,51.02171 L0.86859567,38.2985735 C0.605087772,38.1511153 0.385747448,37.9366669 0.233097764,37.6769927 C0.0804480806,37.4174184 0,37.1220028 0,36.8211961 C0,36.5203894 0.0804480806,36.2250736 0.233097764,35.9653994 C0.385747448,35.7058251 0.605087772,35.4912769 0.86859567,35.3439185 L23.6158446,22.6210616 C24.3438508,22.2138793 25.1649044,22 26.0000349,22 C26.8351655,22 27.6562191,22.2138793 28.3842253,22.6210616 L51.1314243,35.3439185 C51.3948923,35.4912769 51.6142326,35.7058251 51.7668823,35.9653994 C51.919532,36.2250736 52,36.5203894 52,36.8211961 C52,37.1220028 51.919532,37.4174184 51.7668823,37.6769927 C51.6142326,37.9366669 51.3948923,38.1511153 51.1314243,38.2985735 L28.3842253,51.02171 C27.6562191,51.4288424 26.8351655,51.6427915 26.0000349,51.6427915 C25.1649044,51.6427915 24.3438508,51.4288424 23.6157447,51.02171 Z",
  fill: "#2196F3",
  fillRule: "nonzero",
  opacity: "0.4",
  transform: "translate(26.000000, 36.821396) rotate(180.000000) translate(-26.000000, -36.821396) "
})))));
var Logo_default = Logo;

// app/components/popover/NotificationsPopover.tsx
var import_react11 = __toModule(require("react"));
var import_date_fns2 = __toModule(require("date-fns"));
var import_core6 = __toModule(require("@material-ui/core"));
var import_Notifications = __toModule(require("@material-ui/icons/Notifications"));
var import_ShoppingCart = __toModule(require("@material-ui/icons/ShoppingCart"));
var import_CreditCard = __toModule(require("@material-ui/icons/CreditCard"));
var import_Chat = __toModule(require("@material-ui/icons/Chat"));
var now = new Date();
var notifications = [
  {
    id: "5e8883f1b51cc1956a5a1ec0",
    createdAt: (0, import_date_fns2.subHours)(now, 2).getTime(),
    description: "Dummy text",
    title: "Your order is placed",
    type: "order_placed"
  },
  {
    id: "5e8883f7ed1486d665d8be1e",
    createdAt: (0, import_date_fns2.subDays)(now, 1).getTime(),
    description: "You have 32 unread messages",
    title: "New message received",
    type: "new_message"
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: (0, import_date_fns2.subDays)(now, 3).getTime(),
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped"
  },
  {
    id: "5e88840187f6b09b431bae68",
    createdAt: (0, import_date_fns2.subDays)(now, 7).getTime(),
    description: "You have 32 unread messages",
    title: "New message received",
    type: "new_message"
  }
];
var iconsMap = {
  item_shipped: import_ShoppingCart.default,
  new_message: import_Chat.default,
  order_placed: import_CreditCard.default
};
var NotificationsPopover = () => {
  const anchorRef = (0, import_react11.useRef)(null);
  const [open, setOpen] = (0, import_react11.useState)(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core6.Tooltip, {
    title: "Notifications"
  }, /* @__PURE__ */ React.createElement(import_core6.IconButton, {
    color: "inherit",
    ref: anchorRef,
    onClick: handleOpen
  }, /* @__PURE__ */ React.createElement(import_core6.Badge, {
    color: "error",
    badgeContent: 4
  }, /* @__PURE__ */ React.createElement(import_Notifications.default, {
    fontSize: "small"
  })))), /* @__PURE__ */ React.createElement(import_core6.Popover, {
    anchorEl: anchorRef.current,
    anchorOrigin: {
      horizontal: "center",
      vertical: "bottom"
    },
    onClose: handleClose,
    open,
    PaperProps: {
      sx: {width: 320}
    }
  }, /* @__PURE__ */ React.createElement(import_core6.Box, {
    sx: {p: 2}
  }, /* @__PURE__ */ React.createElement(import_core6.Typography, {
    color: "textPrimary",
    variant: "h6"
  }, "Notifications")), notifications.length === 0 ? /* @__PURE__ */ React.createElement(import_core6.Box, {
    sx: {p: 2}
  }, /* @__PURE__ */ React.createElement(import_core6.Typography, {
    color: "textPrimary",
    variant: "subtitle2"
  }, "There are no notifications")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core6.List, {
    disablePadding: true
  }, notifications.map((notification) => {
    const Icon = iconsMap[notification.type];
    return /* @__PURE__ */ React.createElement(import_core6.ListItem, {
      divider: true,
      key: notification.id
    }, /* @__PURE__ */ React.createElement(import_core6.ListItemAvatar, null, /* @__PURE__ */ React.createElement(import_core6.Avatar, {
      sx: {
        backgroundColor: "primary.main",
        color: "primary.contrastText"
      }
    }, /* @__PURE__ */ React.createElement(Icon, {
      fontSize: "small"
    }))), /* @__PURE__ */ React.createElement(import_core6.ListItemText, {
      primary: /* @__PURE__ */ React.createElement(import_core6.Link, {
        color: "textPrimary",
        sx: {cursor: "pointer"},
        underline: "none",
        variant: "subtitle2"
      }, notification.title),
      secondary: notification.description
    }));
  })), /* @__PURE__ */ React.createElement(import_core6.Box, {
    sx: {
      display: "flex",
      justifyContent: "center",
      p: 1
    }
  }, /* @__PURE__ */ React.createElement(import_core6.Button, {
    color: "primary",
    size: "small",
    variant: "text"
  }, "Mark all as read")))));
};
var NotificationsPopover_default = NotificationsPopover;

// app/components/layout/dashboard/DashboardNavbar.tsx
var import_remix2 = __toModule(require("remix"));
var DashboardNavbarRoot = (0, import_styles3.experimentalStyled)(import_core7.AppBar)(({theme}) => __objSpread(__objSpread(__objSpread({}, theme.palette.mode === "light" && {
  backgroundColor: theme.palette.primary.main,
  boxShadow: "none",
  color: theme.palette.primary.contrastText
}), theme.palette.mode === "dark" && {
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: "none"
}), {
  zIndex: theme.zIndex.drawer + 100
}));
var DashboardNavbar = (props) => {
  const _a = props, {onSidebarMobileOpen} = _a, other = __objRest(_a, ["onSidebarMobileOpen"]);
  return /* @__PURE__ */ React.createElement(DashboardNavbarRoot, __objSpread({}, other), /* @__PURE__ */ React.createElement(import_core7.Toolbar, {
    sx: {minHeight: 64}
  }, /* @__PURE__ */ React.createElement(import_core7.IconButton, {
    color: "inherit",
    onClick: onSidebarMobileOpen
  }, /* @__PURE__ */ React.createElement(Menu_default, {
    fontSize: "small"
  })), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo_default, {
    sx: {
      height: 40,
      width: 40
    }
  })), /* @__PURE__ */ React.createElement(import_core7.Box, {
    sx: {
      flexGrow: 1,
      ml: 2
    }
  }), /* @__PURE__ */ React.createElement(LanguagePopover_default, null), /* @__PURE__ */ React.createElement(import_core7.Box, {
    sx: {ml: 1}
  }, /* @__PURE__ */ React.createElement(ContentSearch_default, null)), /* @__PURE__ */ React.createElement(import_core7.Box, {
    sx: {ml: 1}
  }, /* @__PURE__ */ React.createElement(ContactsPopover_default, null)), /* @__PURE__ */ React.createElement(import_core7.Box, {
    sx: {ml: 1}
  }, /* @__PURE__ */ React.createElement(NotificationsPopover_default, null)), /* @__PURE__ */ React.createElement(import_core7.Box, {
    sx: {ml: 2}
  }, /* @__PURE__ */ React.createElement(AccountPopover_default, null))));
};
DashboardNavbar.propTypes = {
  onSidebarMobileOpen: import_prop_types4.default.func
};
var DashboardNavbar_default = DashboardNavbar;

// app/components/layout/dashboard/DashboardSidebar.tsx
var import_core10 = __toModule(require("@material-ui/core"));
var import_Avatar = __toModule(require("@material-ui/core/Avatar"));
var import_react13 = __toModule(require("react"));

// app/components/layout/dashboard/NavSection.tsx
var import_prop_types6 = __toModule(require("prop-types"));
var import_react_router_dom3 = __toModule(require("react-router-dom"));
var import_core9 = __toModule(require("@material-ui/core"));

// app/components/layout/dashboard/NavItem.tsx
var import_react12 = __toModule(require("react"));
var import_remix3 = __toModule(require("remix"));
var import_prop_types5 = __toModule(require("prop-types"));
var import_core8 = __toModule(require("@material-ui/core"));
var import_ChevronRight = __toModule(require("@material-ui/icons/ChevronRight"));
var import_ChevronLeft = __toModule(require("@material-ui/icons/ChevronLeft"));
var NavItem = (props) => {
  const _a = props, {
    active,
    children,
    depth,
    icon,
    info,
    open: openProp,
    path,
    title
  } = _a, other = __objRest(_a, [
    "active",
    "children",
    "depth",
    "icon",
    "info",
    "open",
    "path",
    "title"
  ]);
  const [open, setOpen] = (0, import_react12.useState)(openProp);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  let paddingLeft = 16;
  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }
  if (children) {
    return /* @__PURE__ */ React.createElement(import_core8.ListItem, __objSpread({
      disableGutters: true,
      sx: {
        display: "block",
        py: 0
      }
    }, other), /* @__PURE__ */ React.createElement(import_core8.Button, {
      endIcon: !open ? /* @__PURE__ */ React.createElement(import_ChevronRight.default, {
        fontSize: "small"
      }) : /* @__PURE__ */ React.createElement(import_ChevronLeft.default, {
        fontSize: "small"
      }),
      onClick: handleToggle,
      startIcon: icon,
      sx: {
        color: "text.secondary",
        fontWeight: "fontWeightMedium",
        justifyContent: "flex-start",
        pl: `${paddingLeft}px`,
        pr: "8px",
        py: "12px",
        textAlign: "left",
        textTransform: "none",
        width: "100%"
      },
      variant: "text"
    }, /* @__PURE__ */ React.createElement(import_core8.Box, {
      sx: {flexGrow: 1}
    }, title), info), /* @__PURE__ */ React.createElement(import_core8.Collapse, {
      in: open
    }, children));
  }
  return /* @__PURE__ */ React.createElement(import_core8.ListItem, {
    disableGutters: true,
    sx: {
      display: "flex",
      py: 0
    }
  }, /* @__PURE__ */ React.createElement(import_core8.Button, {
    component: path && import_remix3.Link,
    startIcon: icon,
    sx: __objSpread({
      color: "text.secondary",
      fontWeight: "fontWeightMedium",
      justifyContent: "flex-start",
      textAlign: "left",
      pl: `${paddingLeft}px`,
      pr: "8px",
      py: "12px",
      textTransform: "none",
      width: "100%"
    }, active && {
      color: "primary.main",
      fontWeight: "fontWeightBold",
      "& svg": {
        color: "primary.main"
      }
    }),
    variant: "text",
    to: path
  }, /* @__PURE__ */ React.createElement(import_core8.Box, {
    sx: {flexGrow: 1}
  }, title), info));
};
NavItem.propTypes = {
  active: import_prop_types5.default.bool,
  children: import_prop_types5.default.node,
  depth: import_prop_types5.default.number.isRequired,
  icon: import_prop_types5.default.node,
  info: import_prop_types5.default.node,
  open: import_prop_types5.default.bool,
  path: import_prop_types5.default.string,
  title: import_prop_types5.default.string.isRequired
};
NavItem.defaultProps = {
  active: false,
  open: false
};
var NavItem_default = NavItem;

// app/components/layout/dashboard/NavSection.tsx
var renderNavItems = ({
  depth = 0,
  items,
  pathname
}) => /* @__PURE__ */ React.createElement(import_core9.List, {
  disablePadding: true
}, items.reduce((acc, item) => reduceChildRoutes({
  acc,
  item,
  pathname,
  depth
}), []));
var reduceChildRoutes = ({
  acc,
  pathname,
  item,
  depth
}) => {
  const key = `${item.title}-${depth}`;
  const exactMatch = item.path ? !!(0, import_react_router_dom3.matchPath)({
    path: item.path,
    end: true
  }, pathname) : false;
  if (item.children) {
    const partialMatch = item.path ? !!(0, import_react_router_dom3.matchPath)({
      path: item.path,
      end: false
    }, pathname) : false;
    acc.push(/* @__PURE__ */ React.createElement(NavItem_default, {
      active: partialMatch,
      depth,
      icon: item.icon,
      info: item.info,
      key,
      open: partialMatch,
      path: item.path,
      title: item.title
    }, renderNavItems({
      depth: depth + 1,
      items: item.children,
      pathname
    })));
  } else {
    acc.push(/* @__PURE__ */ React.createElement(NavItem_default, {
      active: exactMatch,
      depth,
      icon: item.icon,
      info: item.info,
      key,
      path: item.path,
      title: item.title
    }));
  }
  return acc;
};
var NavSection = (props) => {
  const _a = props, {items, pathname, title} = _a, other = __objRest(_a, ["items", "pathname", "title"]);
  return /* @__PURE__ */ React.createElement(import_core9.List, __objSpread({
    subheader: /* @__PURE__ */ React.createElement(import_core9.ListSubheader, {
      disableGutters: true,
      disableSticky: true,
      sx: {
        color: "text.primary",
        fontSize: "0.75rem",
        lineHeight: 2.5,
        fontWeight: 700,
        textTransform: "uppercase"
      }
    }, title)
  }, other), renderNavItems({
    items,
    pathname
  }));
};
NavSection.propTypes = {
  items: import_prop_types6.default.array,
  pathname: import_prop_types6.default.string,
  title: import_prop_types6.default.string
};
var NavSection_default = NavSection;

// app/components/layout/dashboard/DashboardSidebar.tsx
var import_remix4 = __toModule(require("remix"));
var import_react_router = __toModule(require("react-router"));
var import_EqualizerSharp = __toModule(require("@material-ui/icons/EqualizerSharp"));
var import_DonutSmallSharp = __toModule(require("@material-ui/icons/DonutSmallSharp"));
var import_LocalMall = __toModule(require("@material-ui/icons/LocalMall"));
var import_Person = __toModule(require("@material-ui/icons/Person"));
var import_Share = __toModule(require("@material-ui/icons/Share"));
var import_Today = __toModule(require("@material-ui/icons/Today"));
var import_Chat2 = __toModule(require("@material-ui/icons/Chat"));
var import_Assignment = __toModule(require("@material-ui/icons/Assignment"));
var import_Work = __toModule(require("@material-ui/icons/Work"));
var import_Group = __toModule(require("@material-ui/icons/Group"));
var import_ShoppingCart2 = __toModule(require("@material-ui/icons/ShoppingCart"));
var import_FolderOpen = __toModule(require("@material-ui/icons/FolderOpen"));
var import_Receipt = __toModule(require("@material-ui/icons/Receipt"));
var sections = [
  {
    title: "General",
    items: [
      {
        title: "Overview",
        path: "/dashboard",
        icon: /* @__PURE__ */ React.createElement(import_EqualizerSharp.default, null)
      },
      {
        title: "Analytics",
        path: "/dashboard/analytics",
        icon: /* @__PURE__ */ React.createElement(import_DonutSmallSharp.default, null)
      },
      {
        title: "Finance",
        path: "/dashboard/finance",
        icon: /* @__PURE__ */ React.createElement(import_LocalMall.default, null)
      },
      {
        title: "Account",
        path: "/dashboard/account",
        icon: /* @__PURE__ */ React.createElement(import_Person.default, null)
      }
    ]
  },
  {
    title: "Management",
    items: [
      {
        title: "Customers",
        path: "/dashboard/customers",
        icon: /* @__PURE__ */ React.createElement(import_Group.default, {
          fontSize: "small"
        }),
        children: [
          {
            title: "List",
            path: "/dashboard/customers"
          },
          {
            title: "Details",
            path: "/dashboard/customers/1"
          },
          {
            title: "Edit",
            path: "/dashboard/customers/1/edit"
          }
        ]
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: /* @__PURE__ */ React.createElement(import_ShoppingCart2.default, {
          fontSize: "small"
        }),
        children: [
          {
            title: "List",
            path: "/dashboard/products"
          },
          {
            title: "Create",
            path: "/dashboard/products/new"
          }
        ]
      },
      {
        title: "Orders",
        icon: /* @__PURE__ */ React.createElement(import_FolderOpen.default, {
          fontSize: "small"
        }),
        path: "/dashboard/orders",
        children: [
          {
            title: "List",
            path: "/dashboard/orders"
          },
          {
            title: "Details",
            path: "/dashboard/orders/1"
          }
        ]
      },
      {
        title: "Invoices",
        path: "/dashboard/invoices",
        icon: /* @__PURE__ */ React.createElement(import_Receipt.default, {
          fontSize: "small"
        }),
        children: [
          {
            title: "List",
            path: "/dashboard/invoices"
          },
          {
            title: "Details",
            path: "/dashboard/invoices/1"
          }
        ]
      }
    ]
  },
  {
    title: "Platforms",
    items: [
      {
        title: "Projects",
        path: "/dashboard/projects",
        icon: /* @__PURE__ */ React.createElement(import_Work.default, {
          fontSize: "small"
        }),
        children: [
          {
            title: "Browse",
            path: "/dashboard/projects/browse"
          },
          {
            title: "Details",
            path: "/dashboard/projects/1"
          },
          {
            title: "Create",
            path: "/dashboard/projects/new"
          }
        ]
      },
      {
        title: "Social",
        path: "/dashboard/social",
        icon: /* @__PURE__ */ React.createElement(import_Share.default, {
          fontSize: "small"
        }),
        children: [
          {
            title: "Profile",
            path: "/dashboard/social/profile"
          },
          {
            title: "Feed",
            path: "/dashboard/social/feed"
          }
        ]
      }
    ]
  },
  {
    title: "Apps",
    items: [
      {
        title: "Kanban",
        path: "/dashboard/kanban",
        icon: /* @__PURE__ */ React.createElement(import_Assignment.default, {
          fontSize: "small"
        })
      },
      {
        title: "Mail",
        path: "/dashboard/mail",
        icon: /* @__PURE__ */ React.createElement(import_Today.default, {
          fontSize: "small"
        })
      },
      {
        title: "Chat",
        path: "/dashboard/chat",
        icon: /* @__PURE__ */ React.createElement(import_Chat2.default, {
          fontSize: "small"
        })
      },
      {
        title: "Calendar",
        path: "/dashboard/calendar",
        icon: /* @__PURE__ */ React.createElement(import_Today.default, {
          fontSize: "small"
        })
      }
    ]
  }
];
var DashboardSidebar = (props) => {
  const {onMobileClose, openMobile} = props;
  const location = (0, import_react_router.useLocation)();
  const {user} = useAuth_default();
  (0, import_react13.useEffect)(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);
  const content = /* @__PURE__ */ React.createElement(import_core10.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /* @__PURE__ */ React.createElement(Scrollbar_default, {
    options: {suppressScrollX: true}
  }, /* @__PURE__ */ React.createElement(import_core10.Box, {
    sx: {
      display: "flex",
      justifyContent: "center",
      p: 2
    }
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo_default, {
    sx: {
      height: 40,
      width: 40
    }
  }))), /* @__PURE__ */ React.createElement(import_core10.Box, {
    sx: {p: 2}
  }, /* @__PURE__ */ React.createElement(import_core10.Box, {
    sx: {
      alignItems: "center",
      backgroundColor: "background.default",
      borderRadius: 1,
      display: "flex",
      overflow: "hidden",
      p: 2
    }
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/dashboard/account"
  }, /* @__PURE__ */ React.createElement(import_Avatar.default, {
    src: user == null ? void 0 : user.avatar,
    sx: {
      cursor: "pointer",
      height: 48,
      width: 48
    }
  }, "U")), /* @__PURE__ */ React.createElement(import_core10.Box, {
    sx: {ml: 2}
  }, /* @__PURE__ */ React.createElement(import_core10.Typography, {
    color: "textPrimary",
    variant: "subtitle2"
  }, user == null ? void 0 : user.name), /* @__PURE__ */ React.createElement(import_core10.Typography, {
    color: "textSecondary",
    variant: "body2"
  }, "Your plan:", " ", /* @__PURE__ */ React.createElement(import_core10.Link, {
    color: "primary",
    component: import_remix4.Link,
    to: "/pricing"
  }, user == null ? void 0 : user.plan))))), /* @__PURE__ */ React.createElement(import_core10.Divider, null), /* @__PURE__ */ React.createElement(import_core10.Box, {
    sx: {p: 2}
  }, sections.map((section) => /* @__PURE__ */ React.createElement(NavSection_default, __objSpread({
    key: section.title,
    pathname: location.pathname,
    sx: {
      "& + &": {
        mt: 3
      }
    }
  }, section)))), /* @__PURE__ */ React.createElement(import_core10.Divider, null), /* @__PURE__ */ React.createElement(import_core10.Box, {
    sx: {p: 2}
  }, /* @__PURE__ */ React.createElement(import_core10.Typography, {
    color: "textPrimary",
    variant: "subtitle2"
  }, "Need Help?"), /* @__PURE__ */ React.createElement(import_core10.Typography, {
    color: "textSecondary",
    variant: "body2"
  }, "Check our docs"), /* @__PURE__ */ React.createElement(import_core10.Button, {
    color: "primary",
    component: import_remix4.Link,
    fullWidth: true,
    sx: {mt: 2},
    to: "/docs",
    variant: "contained"
  }, "Documentation"))));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_core10.Drawer, {
    anchor: "left",
    onClose: onMobileClose,
    open: true,
    PaperProps: {
      sx: {
        backgroundColor: "background.paper",
        width: 280
      }
    },
    variant: "persistent"
  }, content));
};
DashboardSidebar.propTypes = {};
var DashboardSidebar_default = DashboardSidebar;

// app/components/layout/dashboard/base.tsx
var import_react14 = __toModule(require("react"));
var DashboardLayoutRoot = (0, import_core11.experimentalStyled)("div")(({theme}) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%"
}));
var DashboardLayoutWrapper = (0, import_core11.experimentalStyled)("div")(({theme}) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 256
  }
}));
var DashboardLayoutContainer = (0, import_core11.experimentalStyled)("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden"
});
var DashboardLayoutContent = (0, import_core11.experimentalStyled)("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto"
});
var Base = ({children}) => {
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = import_react14.default.useState(false);
  return /* @__PURE__ */ import_react14.default.createElement(DashboardLayoutRoot, null, /* @__PURE__ */ import_react14.default.createElement(DashboardNavbar_default, {
    onSidebarMobileOpen: () => setIsSidebarMobileOpen(true)
  }), /* @__PURE__ */ import_react14.default.createElement(DashboardSidebar_default, {
    onMobileClose: () => setIsSidebarMobileOpen(false),
    openMobile: isSidebarMobileOpen
  }), /* @__PURE__ */ import_react14.default.createElement(DashboardLayoutWrapper, null, /* @__PURE__ */ import_react14.default.createElement(DashboardLayoutContainer, null, /* @__PURE__ */ import_react14.default.createElement(DashboardLayoutContent, null, children))));
};
Base.propTypes = {};
var base_default = Base;

// route-module:/Users/sirum/code/remix/learn-remix/app/root.tsx
var import_i18next2 = __toModule(require("i18next"));

// app/provider.tsx
var import_core12 = __toModule(require("@material-ui/core"));
var import_AdapterDateFns = __toModule(require("@material-ui/lab/AdapterDateFns"));
var import_LocalizationProvider = __toModule(require("@material-ui/lab/LocalizationProvider"));
var import_i18next = __toModule(require("i18next"));
var import_notistack2 = __toModule(require("notistack"));
var import_react17 = __toModule(require("react"));
var import_react_helmet_async = __toModule(require("react-helmet-async"));
var import_react_i18next2 = __toModule(require("react-i18next"));
var import_react_redux2 = __toModule(require("react-redux"));

// app/styles/GlobalStyles.ts
var import_styles4 = __toModule(require("@material-ui/core/styles"));
var useStyles = (0, import_styles4.makeStyles)(() => (0, import_styles4.createStyles)({
  "@global": {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0
    },
    html: {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      height: "100%",
      width: "100%"
    },
    body: {
      height: "100%",
      width: "100%"
    },
    "#root": {
      height: "100%",
      width: "100%"
    }
  }
}));
var GlobalStyles = () => {
  useStyles();
  return null;
};
var GlobalStyles_default = GlobalStyles;

// app/contexts/SettingsContext.tsx
var import_react15 = __toModule(require("react"));
var import_prop_types7 = __toModule(require("prop-types"));

// app/constants.ts
var THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK",
  NATURE: "NATURE"
};

// app/contexts/SettingsContext.tsx
var initialSettings = {
  compact: true,
  direction: "ltr",
  responsiveFontSizes: true,
  roundedCorners: true,
  theme: THEMES.LIGHT
};
var restoreSettings = () => {
  let settings = null;
  try {
    const storedData = window.localStorage.getItem("settings");
    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        compact: true,
        direction: "ltr",
        responsiveFontSizes: true,
        roundedCorners: true,
        theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.DARK : THEMES.LIGHT
      };
    }
  } catch (err) {
    console.error(err);
  }
  return settings;
};
var storeSettings = (settings) => {
  window.localStorage.setItem("settings", JSON.stringify(settings));
};
var SettingsContext = (0, import_react15.createContext)({
  settings: initialSettings,
  saveSettings: () => {
  }
});
var SettingsProvider = (props) => {
  const {children} = props;
  const [settings, setSettings] = (0, import_react15.useState)(initialSettings);
  (0, import_react15.useEffect)(() => {
    const restoredSettings = restoreSettings();
    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);
  const saveSettings = (updatedSettings) => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  };
  return /* @__PURE__ */ React.createElement(SettingsContext.Provider, {
    value: {
      settings,
      saveSettings
    }
  }, children);
};
SettingsProvider.propTypes = {
  children: import_prop_types7.default.node.isRequired
};
var SettingsConsumer = SettingsContext.Consumer;
var SettingsContext_default = SettingsContext;

// app/hooks/useSettings.ts
var import_react16 = __toModule(require("react"));
var useSettings = () => (0, import_react16.useContext)(SettingsContext_default);
var useSettings_default = useSettings;

// app/theme/index.ts
var import_merge = __toModule(require("lodash/merge"));
var import_styles5 = __toModule(require("@material-ui/core/styles"));

// app/theme/shadows.ts
var lightShadows = [
  "none",
  "0px 1px 2px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
  "0px 2px 4px rgba(0, 0, 0, 0.15), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)",
  "0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"
];
var darkShadows = [
  "none",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 2px 2px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 4px 8px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 7px 12px -4px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 6px 16px -4px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 7px 16px -4px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 8px 18px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 9px 18px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 10px 20px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 11px 20px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 13px 22px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 14px 24px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 16px 28px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 18px 30px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 20px 32px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 22px 34px -8px rgba(0,0,0,0.50)",
  "0 0 1px 0 rgba(0,0,0,0.70), 0 24px 36px -8px rgba(0,0,0,0.50)"
];

// app/theme/index.ts
var baseOptions = {
  direction: "ltr",
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: "75%",
          width: "75%"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6"
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: "hidden"
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: "16px"
        }
      }
    }
  },
  typography: {
    button: {
      fontWeight: 600
    },
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontWeight: 600,
      fontSize: "3.5rem"
    },
    h2: {
      fontWeight: 600,
      fontSize: "3rem"
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem"
    },
    h4: {
      fontWeight: 600,
      fontSize: "2rem"
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem"
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem"
    },
    overline: {
      fontWeight: 600
    }
  }
};
var themesOptions = {
  [THEMES.LIGHT]: {
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            "&::placeholder": {
              opacity: 0.86,
              color: "#42526e"
            }
          }
        }
      }
    },
    palette: {
      action: {
        active: "#6b778c"
      },
      background: {
        default: "#f4f5f7",
        paper: "#ffffff"
      },
      error: {
        contrastText: "#ffffff",
        main: "#f44336"
      },
      mode: "light",
      primary: {
        contrastText: "#ffffff",
        main: "#5664d2"
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50"
      },
      text: {
        primary: "#172b4d",
        secondary: "#6b778c"
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800"
      }
    },
    shadows: lightShadows
  },
  [THEMES.DARK]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid rgba(145, 158, 171, 0.24)"
          }
        }
      }
    },
    palette: {
      background: {
        default: "#171c24",
        paper: "#222b36"
      },
      divider: "rgba(145, 158, 171, 0.24)",
      error: {
        contrastText: "#ffffff",
        main: "#f44336"
      },
      mode: "dark",
      primary: {
        contrastText: "#ffffff",
        main: "#688eff"
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50"
      },
      text: {
        primary: "#ffffff",
        secondary: "#919eab"
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800"
      }
    },
    shadows: darkShadows
  },
  [THEMES.NATURE]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid rgba(145, 158, 171, 0.24)"
          }
        }
      }
    },
    palette: {
      background: {
        default: "#1c2531",
        paper: "#293142"
      },
      divider: "rgba(145, 158, 171, 0.24)",
      error: {
        contrastText: "#ffffff",
        main: "#f44336"
      },
      mode: "dark",
      primary: {
        contrastText: "#ffffff",
        main: "#01ab56"
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50"
      },
      text: {
        primary: "#ffffff",
        secondary: "#919eab"
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800"
      }
    },
    shadows: darkShadows
  }
};
var createTheme = (config = {}) => {
  let themeOptions = themesOptions[config.theme];
  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = themesOptions[THEMES.LIGHT];
  }
  let theme = (0, import_styles5.createTheme)((0, import_merge.default)({}, baseOptions, themeOptions, __objSpread({}, config.roundedCorners && {
    shape: {
      borderRadius: 16
    }
  }), {
    direction: config.direction
  }));
  if (config.responsiveFontSizes) {
    theme = (0, import_styles5.responsiveFontSizes)(theme);
  }
  return theme;
};

// app/provider.tsx
var Provider = ({children}) => {
  const {settings} = useSettings_default();
  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  });
  return /* @__PURE__ */ import_react17.default.createElement(import_react_helmet_async.HelmetProvider, null, /* @__PURE__ */ import_react17.default.createElement(import_react_redux2.Provider, {
    store: store_default
  }, /* @__PURE__ */ import_react17.default.createElement(import_core12.StyledEngineProvider, {
    injectFirst: true
  }, /* @__PURE__ */ import_react17.default.createElement(import_LocalizationProvider.default, {
    dateAdapter: import_AdapterDateFns.default
  }, /* @__PURE__ */ import_react17.default.createElement(import_react_i18next2.I18nextProvider, {
    i18n: import_i18next.default
  }, /* @__PURE__ */ import_react17.default.createElement(SettingsProvider, null, /* @__PURE__ */ import_react17.default.createElement(import_notistack2.SnackbarProvider, null, /* @__PURE__ */ import_react17.default.createElement(AuthProvider, null, /* @__PURE__ */ import_react17.default.createElement(import_core12.ThemeProvider, {
    theme
  }, /* @__PURE__ */ import_react17.default.createElement(GlobalStyles_default, null), children)))))))));
};
Provider.propTypes = {};
var provider_default = Provider;

// route-module:/Users/sirum/code/remix/learn-remix/app/root.tsx
var import_react18 = __toModule(require("react"));
var import_react_router_dom4 = __toModule(require("react-router-dom"));
var import_remix5 = __toModule(require("remix"));

// app/styles/global.css
var global_default = "/build/_assets/global-I5E7NNPL.css";

// app/translations/de/common.ts
var Translation = {
  locationdetail: {
    customer: "Kunde",
    comment: "Anmerkung",
    close: "Schlie\xDFen",
    amount: "Menge",
    delivery: "Lieferadresse",
    dimensions: "Dimensionens",
    title: "\xDCbersicht",
    time: "Geplante Zeit",
    stop_number: "Stop"
  },
  error: {
    default: "Hoppla! Etwas ist schief gelaufen!",
    badrequest: "Server: Ung\xFCltige Anfrage",
    unauthorized: "Anmeldedaten ung\xFCltig",
    requestlimit: "Zu viele Login-Anfragen! Bitte versuchen Sie es in 15 Minuten erneut",
    nologinpossible: "Anmeldung mit den erhaltenen Anmeldeinformationen nicht m\xF6glich",
    nopincode: "Um die Anmeldedaten speichern zu k\xF6nnenn, muss eine PIN ringerichtet sein",
    nocredentialsfound: "Es konnten keine Anmeldeinformationen f\xFCr diese Telefonnummer und dieses Passwort gefunden werden",
    singletransport: "Weiter mit Fehler",
    nointernet: "Ihr Smartphone ist nicht mit dem Internet verbunden. Bitte Verbindung herstellen und erneut versuchen"
  },
  answers: {
    yes: "Ja",
    no: "Nein"
  },
  login: {
    title: "Bitte melden Sie sich an",
    phonenumber: "Telefonnummer",
    password: "Passwort",
    submit: "anmelden"
  },
  chooseinstance: {
    title: "W\xE4hlen Sie Ihren Auftraggeber",
    logout: "abmelden"
  },
  menu: {
    title: "Hallo {{name}}!",
    changeinstance: "Auftraggeber wechseln",
    logout: "Abmelden"
  },
  new: {
    shorttitle: "Neu",
    title: "Neue Transporte",
    cardtitle: "Transport Nr. {{number}}",
    confirm: "akzeptieren",
    decline: "ablehnen"
  },
  current: {
    shorttitle: "Aktuell",
    title: "Aktuelle Transporte",
    cardtitle: "Transport Nr. {{number}}"
  },
  chat: {
    shorttitle: "Chat",
    title: "Chat"
  },
  errorfallback: {
    sub_error_msg: "Fehlermeldung",
    error_title: "Error",
    reset_button: "Ausloggen und neu versuchen"
  },
  enterbarcode: {
    title: "Barcode eingeben",
    card_title: "Bitte einen Barcode eingeben"
  },
  actions: {
    save: "speichern",
    skip: "\xFCberspringen",
    next_task: "und n\xE4chste Aufgabe bearbeiten",
    alert: {
      header: "Best\xE4tigung",
      message: "Sind Sie sich sicher diese Aktion zu \xFCberspringen?",
      no: "Nein",
      yes: "Ja"
    },
    title: {
      attachment: "Dokument scannen",
      error: "Fehlertyp ausw\xE4hlen",
      odometer: "Kilometerstand",
      packages: "Packst\xFCcke ausw\xE4hlen",
      package_move: "Lademittelbewegung",
      picture: "Foto aufnehmen",
      signature: "Unterschrift erfassen",
      signer: "Unterzeichner eingeben"
    },
    attachment: {
      scan_document: "Dokument scannen"
    },
    error: {
      really_sure: "Sind Sie wirklich sicher?",
      cant_undo: "Dies kann nicht r\xFCckg\xE4ngig gemacht werden!",
      use_error_type: "diesen Fehlertyp verwenden"
    },
    odometer: {
      time: "Zeitpunkt",
      value: "Kilometerstand"
    },
    packages: {
      scan: "Barcode scannen",
      enter: "Barcode eingeben",
      allpackages: "Packst\xFCcke",
      invalid_barcode: "Der gescannte Barcode entspricht keinen der aufgelisteten Pakete",
      show_all: "Alle Anzeigen",
      hide_scanned: "Gescannte Packst\xFCcke ausblenden",
      valid_barcode: "Der eingegebene Barcode ist Valide",
      invalid_barcode_search: "Kein Barcode mit diesem Namen gefunden"
    },
    package_move: {
      delivered: "Angeliefert",
      pickedup: "Abgeholt"
    },
    picture: {
      take: "Foto aufnehmen"
    },
    signature: {
      clear: "l\xF6schen"
    },
    signer: {
      signer: "Unterzeichner"
    }
  }
};
var common_default = Translation;

// app/translations/en/common.ts
var Translation2 = {
  locationdetail: {
    customer: "Customer",
    comment: "Comment",
    close: "Close",
    amount: "Amount",
    delivery: "Delivery Address",
    dimensions: "dimensions",
    title: "Location Overview",
    time: "Planned Time",
    stop_number: "Stop",
    nointernet: "Your Smartphone is not connected to the internet. Please connect and retry."
  },
  error: {
    default: "Oops! Something went wrong!",
    badrequest: "Server: Bad Request",
    unauthorized: "Invalid login data",
    requestlimit: "Too many Login Requests! Please try again in 15 Minutes",
    nologinpossible: "Could not Login with the provided Credentials",
    nopincode: "To save your login data, please set up a pin code on this phone",
    nocredentialsfound: "Could not find any Credentials for this Phonenumber and Password",
    singletransport: "Process with Error"
  },
  answers: {
    yes: "Yes",
    no: "No"
  },
  login: {
    title: "Please login",
    phonenumber: "Phonenumber",
    password: "Password",
    submit: "login"
  },
  chooseinstance: {
    title: "Choose your client",
    logout: "logout"
  },
  menu: {
    title: "Hello {{name}}!",
    changeinstance: "Change client",
    logout: "Logout"
  },
  new: {
    shorttitle: "New",
    title: "New Transports",
    cardtitle: "Transport No. {{number}}",
    confirm: "accept",
    decline: "decline"
  },
  current: {
    shorttitle: "Current",
    title: "Current Transports",
    cardtitle: "Transport No. {{number}}"
  },
  chat: {
    shorttitle: "Chat",
    title: "Chat"
  },
  errorfallback: {
    sub_error_msg: "Error Message",
    error_title: "Error",
    reset_button: "Logout and try again"
  },
  enterbarcode: {
    title: "Enter Barcode",
    card_title: "Please Enter a Barcode"
  },
  actions: {
    save: "save",
    skip: "skip",
    next_task: "and process next task",
    alert: {
      header: "Confirmation",
      message: "Are you sure to skip this action?",
      no: "no",
      yes: "yes"
    },
    title: {
      attachment: "scan Document",
      error: "Fehlertyp ausw\xE4hlen",
      odometer: "Odometer",
      packages: "Select Packages",
      package_move: "Loading equipment movement",
      picture: "Take Picture",
      signature: "Capture Signature",
      signer: "Enter Signer"
    },
    attachment: {
      scan_document: "scan Document"
    },
    error: {
      really_sure: "Are You Really Sure?",
      cant_undo: "This cannot be reversed!",
      use_error_type: "use this type of error"
    },
    odometer: {
      time: "Time",
      value: "Mileage"
    },
    packages: {
      scan: "scan Barcode",
      enter: "enter Barcode",
      allpackages: "Packages",
      invalid_barcode: "The scanned barcode does not match any of the packages",
      show_all: "Show All",
      hide_scanned: "Hide Scanned Packages",
      valid_barcode: "The barcode is valid",
      invalid_barcode_search: "No barcode found with this name"
    },
    package_move: {
      delivered: "delivered",
      pickedup: "picked up"
    },
    picture: {
      take: "take a picture"
    },
    signature: {
      clear: "clear"
    },
    signer: {
      signer: "Signer"
    }
  }
};
var common_default2 = Translation2;

// route-module:/Users/sirum/code/remix/learn-remix/app/root.tsx
import_i18next2.default.init({
  interpolation: {escapeValue: false},
  fallbackLng: ["en", "de"],
  resources: {
    en: {
      common: common_default2
    },
    de: {
      common: common_default
    }
  }
}).catch((error) => console.error(error));
var links = () => {
  return [{rel: "stylesheet", href: global_default}];
};
var loader = async () => {
  return {date: new Date()};
};
function Document({children}) {
  return /* @__PURE__ */ import_react18.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react18.default.createElement("head", null, /* @__PURE__ */ import_react18.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react18.default.createElement("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png"
  }), /* @__PURE__ */ import_react18.default.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  }), /* @__PURE__ */ import_react18.default.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  }), /* @__PURE__ */ import_react18.default.createElement(import_remix5.Meta, null), /* @__PURE__ */ import_react18.default.createElement(import_remix5.Links, null)), /* @__PURE__ */ import_react18.default.createElement(provider_default, null, /* @__PURE__ */ import_react18.default.createElement("body", null, /* @__PURE__ */ import_react18.default.createElement(base_default, null, children), /* @__PURE__ */ import_react18.default.createElement(import_remix5.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ import_react18.default.createElement(import_remix5.LiveReload, null))));
}
function App() {
  let data = (0, import_remix5.useRouteData)();
  return /* @__PURE__ */ import_react18.default.createElement(Document, null, /* @__PURE__ */ import_react18.default.createElement(import_react_router_dom4.Outlet, null), /* @__PURE__ */ import_react18.default.createElement("footer", null, /* @__PURE__ */ import_react18.default.createElement("p", null, "This page was rendered at ", data.date.toLocaleString())));
}
function ErrorBoundary({error}) {
  return /* @__PURE__ */ import_react18.default.createElement(Document, null, /* @__PURE__ */ import_react18.default.createElement("h1", null, "App Error"), /* @__PURE__ */ import_react18.default.createElement("pre", null, error.message), /* @__PURE__ */ import_react18.default.createElement("p", null, "Replace this UI with what you want users to see when your app throws uncaught errors."));
}

// route-module:/Users/sirum/code/remix/learn-remix/app/routes/404.tsx
var __exports = {};
__export(__exports, {
  default: () => FourOhFour,
  meta: () => meta
});
var meta = () => {
  return {title: "Ain't nothing here"};
};
function FourOhFour() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "404"));
}

// route-module:/Users/sirum/code/remix/learn-remix/app/routes/Template.tsx
var Template_exports = {};
__export(Template_exports, {
  default: () => Template,
  meta: () => meta2
});
var meta2 = () => {
  return {
    title: "Template"
  };
};
function Template() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Template"));
}

// route-module:/Users/sirum/code/remix/learn-remix/app/routes/categories.tsx
var categories_exports = {};
__export(categories_exports, {
  PROJECTS: () => PROJECTS,
  default: () => Template2,
  loader: () => loader2,
  meta: () => meta3
});
var import_react19 = __toModule(require("react"));
var import_react_router_dom5 = __toModule(require("react-router-dom"));
var import_remix6 = __toModule(require("remix"));
var meta3 = () => {
  return {
    title: "Template"
  };
};
var loader2 = async () => {
  return PROJECTS;
};
var PROJECTS = [
  {
    title: "First Project",
    todos: [{title: "First Todo"}],
    description: "This is my first"
  }
];
function Template2() {
  let categories = (0, import_remix6.useRouteData)();
  return /* @__PURE__ */ import_react19.default.createElement("main", null, /* @__PURE__ */ import_react19.default.createElement(import_react_router_dom5.Outlet, null));
}

// route-module:/Users/sirum/code/remix/learn-remix/app/routes/categories/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => Category,
  loader: () => loader3,
  meta: () => meta4
});
var import_remix8 = __toModule(require("remix"));

// app/routes/categories.tsx
var import_react20 = __toModule(require("react"));
var import_react_router_dom6 = __toModule(require("react-router-dom"));
var import_remix7 = __toModule(require("remix"));
var PROJECTS2 = [
  {
    title: "First Project",
    todos: [{title: "First Todo"}],
    description: "This is my first"
  }
];

// route-module:/Users/sirum/code/remix/learn-remix/app/routes/categories/$id.tsx
var import_react21 = __toModule(require("react"));
var meta4 = () => {
  return {
    title: "Category"
  };
};
var loader3 = async ({params}) => {
  return PROJECTS2[+params.id];
};
function Category() {
  let category = (0, import_remix8.useRouteData)();
  return /* @__PURE__ */ import_react21.default.createElement("div", null, /* @__PURE__ */ import_react21.default.createElement("h2", null, category.title), /* @__PURE__ */ import_react21.default.createElement("h1", null), /* @__PURE__ */ import_react21.default.createElement("h4", null, category.description), /* @__PURE__ */ import_react21.default.createElement("ul", null, category.todos.map((todo) => {
    return /* @__PURE__ */ import_react21.default.createElement("li", {
      key: todo.title
    }, todo.title);
  })));
}

// route-module:/Users/sirum/code/remix/learn-remix/app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  meta: () => meta5
});
var meta5 = () => {
  return {
    title: "Dashboard"
  };
};
function Dashboard() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {textAlign: "center", padding: 20}
  }, /* @__PURE__ */ React.createElement("h2", null, "Dashboard"));
}

// route-module:/Users/sirum/code/remix/learn-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2,
  loader: () => loader4,
  meta: () => meta6
});
var import_remix9 = __toModule(require("remix"));

// app/styles/index.css
var styles_default = "/build/_assets/index-BGRSJ545.css";

// route-module:/Users/sirum/code/remix/learn-remix/app/routes/index.tsx
var meta6 = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
var links2 = () => {
  return [{rel: "stylesheet", href: styles_default}];
};
var loader4 = async () => {
  return {message: "this is awesome \u{1F60E}"};
};
function Index() {
  let data = (0, import_remix9.useRouteData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: {textAlign: "center", padding: 20}
  }, /* @__PURE__ */ React.createElement("h2", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/dashboard/docs"
  }, "Check out the docs"), " to get started."), /* @__PURE__ */ React.createElement("p", null, "Message from the loader: ", data.message));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = {module: entry_server_exports};
var routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "/",
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "*",
    caseSensitive: false,
    module: __exports
  },
  "routes/Template": {
    id: "routes/Template",
    parentId: "root",
    path: "Template",
    caseSensitive: false,
    module: Template_exports
  },
  "routes/categories": {
    id: "routes/categories",
    parentId: "root",
    path: "categories",
    caseSensitive: false,
    module: categories_exports
  },
  "routes/categories/$id": {
    id: "routes/categories/$id",
    parentId: "routes/categories",
    path: ":id",
    caseSensitive: false,
    module: id_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    caseSensitive: false,
    module: dashboard_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "/",
    caseSensitive: false,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
