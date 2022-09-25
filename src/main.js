import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

const app = createApp(App);

const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About",
    },
    home: {
      hello_world: "hello world",
      hello: "{msg} world", //named interpolation
      hello_list: "{0}, {1}, {2} world", // list interpolation
      dio: "Monet:",
      linked: "@:home.dio @:home.hello_world !!!!", // linked interpolation
      email: "Email: food{'@'}domain", // literal interpolation
      homeAddress: "I hope you're doing well in {street}, {zipCode}", //named interpolation
      homeGreeting: "Nice to meet you, {name}", //named interpolation
      missingHomeAddress: "Please provide home address below.",
      word_zipcode: "Postal Code",
      word_address: "Address",
      word_name: "Name",
    },
    about: {
      full_name: "Oscar-Claude Monet",
      about_me: "I am a painter from Rue Laffitte, Paris, France",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "プロフィール",
    },
    home: {
      hello_world: "こんにちは、世界",
      hello_list: "{0}, {1}, {2} 世界",
      hello: "{msg} 世界",
      dio: "モネさん:",
      linked: "@:home.dio @:home.hello_world !!!!",
      email: "メール：food{'@'}domain", // literal interpolation
      homeAddress: "〒 {zipCode} {street} へ届きますね。",
      homeGreeting: "初めまして, {name}。", //named interpolation
      missingHomeAddress: "下記の住所は必須です",
      word_zipcode: "郵便番号",
      word_address: "住所",
      word_name: "名前",
    },
    about: {
      full_name: "オスカル＝クロード・モネ",
      about_me: "フランスからの画家です",
    },
  },
};

const datetimeFormats = {
  en: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
    },
  },
  ja: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    },
  },
};

const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "USD",
      notation: "standard",
    },
    decimal: {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
  ja: {
    currency: {
      style: "currency",
      currency: "JPY",
      useGrouping: true,
      currencyDisplay: "symbol",
    },
    decimal: {
      style: "decimal",
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 5,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
};

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
