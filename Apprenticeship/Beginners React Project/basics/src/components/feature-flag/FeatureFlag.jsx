import Accordian from "../accordian/Accordian";
import QR from "../qr-code-generator/QR";
import ModalPopup from "../modal-popup/ModalPopup";
import ThemeChange from "../theme-change/ThemeChange";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import { useContext } from "react";
import { FeatureFlagContext } from "./context/FlagContext";

const FeatureFlag = () => {
  const { loading, flags } = useContext(FeatureFlagContext);

  const componentToRender = [
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showModalPopup",
      component: <ModalPopup />,
    },
    {
      key: "showQrcode",
      component: <QR />,
    },
    {
      key: "showThemeChange",
      component: <ThemeChange />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
  ];

  const checkEnabledFlags = (key) => {
    return flags[key];
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentToRender.map((item) =>
        checkEnabledFlags(item.key) ? item.component : null
      )}
    </div>
  );
};

export default FeatureFlag;
