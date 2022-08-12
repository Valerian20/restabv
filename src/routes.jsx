import Reservation from "./containers/Reservation/Reservation";
import MyAccount from "./containers/myAccount/myAccount";
import Homepage from "./containers/Homepage/Homepage";

export default {
  "/reservation": <Reservation />,
  "/myaccount": <MyAccount />,
  "/homepage": <Homepage />,
};
