const Translation = {
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
    nointernet:
      "Your Smartphone is not connected to the internet. Please connect and retry.",
  },
  error: {
    default: "Oops! Something went wrong!",
    badrequest: "Server: Bad Request",
    unauthorized: "Invalid login data",
    requestlimit: "Too many Login Requests! Please try again in 15 Minutes",
    nologinpossible: "Could not Login with the provided Credentials",
    nopincode: "To save your login data, please set up a pin code on this phone",
    nocredentialsfound:
      "Could not find any Credentials for this Phonenumber and Password",
    singletransport: "Process with Error",
  },
  answers: {
    yes: "Yes",
    no: "No",
  },
  login: {
    title: "Please login",
    phonenumber: "Phonenumber",
    password: "Password",
    submit: "login",
  },
  chooseinstance: {
    title: "Choose your client",
    logout: "logout",
  },
  menu: {
    title: "Hello {{name}}!",
    changeinstance: "Change client",
    logout: "Logout",
  },
  new: {
    shorttitle: "New",
    title: "New Transports",
    cardtitle: "Transport No. {{number}}",
    confirm: "accept",
    decline: "decline",
  },
  current: {
    shorttitle: "Current",
    title: "Current Transports",
    cardtitle: "Transport No. {{number}}",
  },
  chat: {
    shorttitle: "Chat",
    title: "Chat",
  },
  errorfallback: {
    sub_error_msg: "Error Message",
    error_title: "Error",
    reset_button: "Logout and try again",
  },
  enterbarcode: {
    title: "Enter Barcode",
    card_title: "Please Enter a Barcode",
  },
  actions: {
    save: "save",
    skip: "skip",
    next_task: "and process next task",
    alert: {
      header: "Confirmation",
      message: "Are you sure to skip this action?",
      no: "no",
      yes: "yes",
    },
    title: {
      attachment: "scan Document",
      error: "Fehlertyp auswählen",
      odometer: "Odometer",
      packages: "Select Packages",
      package_move: "Loading equipment movement",
      picture: "Take Picture",
      signature: "Capture Signature",
      signer: "Enter Signer",
    },
    attachment: {
      scan_document: "scan Document",
    },
    error: {
      really_sure: "Are You Really Sure?",
      cant_undo: "This cannot be reversed!",
      use_error_type: "use this type of error",
    },
    odometer: {
      time: "Time",
      value: "Mileage",
    },
    packages: {
      scan: "scan Barcode",
      enter: "enter Barcode",
      allpackages: "Packages",
      invalid_barcode: "The scanned barcode does not match any of the packages",
      show_all: "Show All",
      hide_scanned: "Hide Scanned Packages",
      valid_barcode: "The barcode is valid",
      invalid_barcode_search: "No barcode found with this name",
    },
    package_move: {
      delivered: "delivered",
      pickedup: "picked up",
    },
    picture: {
      take: "take a picture",
    },
    signature: {
      clear: "clear",
    },
    signer: {
      signer: "Signer",
    },
  },
};

export default Translation;
