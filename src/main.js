import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPlusCircle,
  faUndoAlt,
  faDumbbell,
  faAddressCard,
  faAnchor,
  faAppleWhole,
  faArrowUp,
  faAtom,
  faBan,
  faBanSmoking,
  faBasketball,
  faBath,
  faBell,
  faBed,
  faBicycle,
  faBookOpen,
  faBowlRice,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faPlusCircle,
  faUndoAlt,
  faDumbbell,
  faAddressCard,
  faAnchor,
  faAppleWhole,
  faArrowUp,
  faAtom,
  faBan,
  faBanSmoking,
  faBasketball,
  faBath,
  faBell,
  faBed,
  faBicycle,
  faBookOpen,
  faBowlRice,
  faBrain
);

store.subscribe((mutations, state) => {
  localStorage.setItem("goals", JSON.stringify(state.goals));
});

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
