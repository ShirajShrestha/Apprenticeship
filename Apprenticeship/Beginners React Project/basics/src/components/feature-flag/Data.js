const dummyApidata = {
  showAccordian: false,
  showModalPopup: true,
  showQrcode: true,
  showThemeChange: true,
  showTicTacToe: false,
};

const flagData = () => {
  return new Promise((resolve, reject) => {
    if (dummyApidata) setTimeout(resolve(dummyApidata), 500);
    else reject("Error occured! Please try again later.");
  });
};

export default flagData;
