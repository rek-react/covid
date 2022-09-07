import headerFixed from "./headerFixed";
import nav from "./nav";
import navigation from "./navigation";

class App {
   init() {
      navigation.init()
      nav.init()
      headerFixed.init()
   }
}
const app = new App()
app.init()

