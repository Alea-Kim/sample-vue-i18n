import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import { messages } from "@/helpers/messages.js";
import { datetimeFormats } from "@/helpers/datetimeFormats.js";
import { numberFormats } from "@/helpers/numberFormats.js";

const app = createApp(App);

const i18n = createI18n({
  locale: "ja", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
  datetimeFormats, // For date time format
  numberFormats, // for number formats
  // If you need to specify other options, you can set other options
  // ...
});

app.use(i18n);
app.use(router);

app.mount("#app");
