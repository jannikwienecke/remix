import { StyledEngineProvider, ThemeProvider } from "@material-ui/core";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import i18next from "i18next";
import { SnackbarProvider } from "notistack";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import { Provider as ReduxProvider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";
import { AuthProvider } from "./contexts/JWTContext";
import { SettingsProvider } from "./contexts/SettingsContext";
import useSettings from "./hooks/useSettings";
import store from "./store";
import { createTheme } from "./theme";

const Provider: React.FC = ({ children }) => {
  const { settings } = useSettings();

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme,
  });

  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <StyledEngineProvider injectFirst>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <I18nextProvider i18n={i18next}>
              <SettingsProvider>
                <SnackbarProvider>
                  <AuthProvider>
                    <ThemeProvider theme={theme}>
                      <GlobalStyles />
                      {children}
                    </ThemeProvider>
                  </AuthProvider>
                </SnackbarProvider>
              </SettingsProvider>
            </I18nextProvider>
          </LocalizationProvider>
        </StyledEngineProvider>
      </ReduxProvider>
    </HelmetProvider>
  );
};

Provider.propTypes = {};

export default Provider;
