export const messages = {
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
