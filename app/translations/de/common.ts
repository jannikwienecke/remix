const Translation = {
  locationdetail: {
    customer: "Kunde",
    comment: "Anmerkung",
    close: "Schließen",
    amount: "Menge",
    delivery: "Lieferadresse",
    dimensions: "Dimensionens",
    title: "Übersicht",
    time: "Geplante Zeit",
    stop_number: "Stop",
  },
  error: {
    default: "Hoppla! Etwas ist schief gelaufen!",
    badrequest: "Server: Ungültige Anfrage",
    unauthorized: "Anmeldedaten ungültig",
    requestlimit:
      "Zu viele Login-Anfragen! Bitte versuchen Sie es in 15 Minuten erneut",
    nologinpossible: "Anmeldung mit den erhaltenen Anmeldeinformationen nicht möglich",
    nopincode:
      "Um die Anmeldedaten speichern zu könnenn, muss eine PIN ringerichtet sein",
    nocredentialsfound:
      "Es konnten keine Anmeldeinformationen für diese Telefonnummer und dieses Passwort gefunden werden",
    singletransport: "Weiter mit Fehler",
    nointernet:
      "Ihr Smartphone ist nicht mit dem Internet verbunden. Bitte Verbindung herstellen und erneut versuchen",
  },
  answers: {
    yes: "Ja",
    no: "Nein",
  },
  login: {
    title: "Bitte melden Sie sich an",
    phonenumber: "Telefonnummer",
    password: "Passwort",
    submit: "anmelden",
  },
  chooseinstance: {
    title: "Wählen Sie Ihren Auftraggeber",
    logout: "abmelden",
  },
  menu: {
    title: "Hallo {{name}}!",
    changeinstance: "Auftraggeber wechseln",
    logout: "Abmelden",
  },
  new: {
    shorttitle: "Neu",
    title: "Neue Transporte",
    cardtitle: "Transport Nr. {{number}}",
    confirm: "akzeptieren",
    decline: "ablehnen",
  },
  current: {
    shorttitle: "Aktuell",
    title: "Aktuelle Transporte",
    cardtitle: "Transport Nr. {{number}}",
  },
  chat: {
    shorttitle: "Chat",
    title: "Chat",
  },
  errorfallback: {
    sub_error_msg: "Fehlermeldung",
    error_title: "Error",
    reset_button: "Ausloggen und neu versuchen",
  },
  enterbarcode: {
    title: "Barcode eingeben",
    card_title: "Bitte einen Barcode eingeben",
  },
  actions: {
    save: "speichern",
    skip: "überspringen",
    next_task: "und nächste Aufgabe bearbeiten",
    alert: {
      header: "Bestätigung",
      message: "Sind Sie sich sicher diese Aktion zu überspringen?",
      no: "Nein",
      yes: "Ja",
    },
    title: {
      attachment: "Dokument scannen",
      error: "Fehlertyp auswählen",
      odometer: "Kilometerstand",
      packages: "Packstücke auswählen",
      package_move: "Lademittelbewegung",
      picture: "Foto aufnehmen",
      signature: "Unterschrift erfassen",
      signer: "Unterzeichner eingeben",
    },
    attachment: {
      scan_document: "Dokument scannen",
    },
    error: {
      really_sure: "Sind Sie wirklich sicher?",
      cant_undo: "Dies kann nicht rückgängig gemacht werden!",
      use_error_type: "diesen Fehlertyp verwenden",
    },
    odometer: {
      time: "Zeitpunkt",
      value: "Kilometerstand",
    },
    packages: {
      scan: "Barcode scannen",
      enter: "Barcode eingeben",
      allpackages: "Packstücke",
      invalid_barcode:
        "Der gescannte Barcode entspricht keinen der aufgelisteten Pakete",
      show_all: "Alle Anzeigen",
      hide_scanned: "Gescannte Packstücke ausblenden",
      valid_barcode: "Der eingegebene Barcode ist Valide",
      invalid_barcode_search: "Kein Barcode mit diesem Namen gefunden",
    },
    package_move: {
      delivered: "Angeliefert",
      pickedup: "Abgeholt",
    },
    picture: {
      take: "Foto aufnehmen",
    },
    signature: {
      clear: "löschen",
    },
    signer: {
      signer: "Unterzeichner",
    },
  },
};

export default Translation;
