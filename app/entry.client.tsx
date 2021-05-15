import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom";
import { RemixBrowser } from "remix";
import common_de from "./translations/de/common";
import common_en from "./translations/en/common";

ReactDOM.hydrate(<RemixBrowser />, document);
