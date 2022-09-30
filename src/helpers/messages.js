export const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About",
    },
    home: {
      word_sample: "Preview",
      word_dateArrival: "Date of Arrival",
      word_price: "Monthly Price",
      word_zipcode: "Postal Code",
      word_address: "Address",
      word_name: "Name",
      title: "Monthly Postcard Subscription",
      err_msg_missingHomeAddress: "Please provide home address below.",
      hello_world: "hello world",
      hello: "{msg} world", //named interpolation
      hello_list: "{0}, {1}, {2} world", // list interpolation
      artistName: "Monet:",
      linked: "@:home.artistName @:home.hello_world !!!!", // linked interpolation
      email: "Email: food{'@'}domain", // literal interpolation
      homeAddress: "I hope you're doing well in {street}, {zipCode}", //named interpolation
      homeGreeting: "Nice to meet you, {name}", //named interpolation
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
      word_sample: "プレビュー",
      word_dateArrival: "到着日",
      word_price: "サブスク費",
      word_zipcode: "郵便番号",
      word_address: "住所",
      word_name: "名前",
      title: "マンスリーポストカード登録",
      err_msg_missingHomeAddress: "下記の住所は必須です",
      hello_world: "こんにちは、世界",
      hello_list: "{0}, {1}, {2} 世界",
      hello: "{msg} 世界",
      artistName: "モネさん:",
      linked: "@:home.artistName @:home.hello_world !!!!",
      email: "メール：food{'@'}domain", // literal interpolation
      homeAddress: "〒 {zipCode} {street} へ届くまで御機嫌よう",
      homeGreeting: "初めまして, {name}。", //named interpolation
    },
    about: {
      full_name: "オスカル＝クロード・モネ",
      about_me: "フランスからの画家です",
    },
  },
};
