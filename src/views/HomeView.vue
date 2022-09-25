<template>
  <main>
    <div class="child-container">
      <div>
        <h1>Monthly Postcard Subscription</h1>
        <div class="the-post-card">
          <img src="@/assets/images/coverphoto.jpeg" />
          <span v-if="name" class="display-info">
            {{
              $t("home.homeGreeting", {
                name: name,
              })
            }}
          </span>
          <br />
          <span>
            <span v-if="zipCode && streetAddress" class="display-info">
              {{
                $t("home.homeAddress", {
                  zipCode: zipCode,
                  street: streetAddress,
                })
              }}
            </span>
          </span>
        </div>
        <h3>Who are you?</h3>
        <span>{{ $t("home.word_name") }}: <input v-model="name" /></span>

        <h3>Where in the world are you?</h3>
        <div>
          <span
            >{{ $t("home.word_zipcode") }}: <input v-model="zipCode"
          /></span>
          <br />
          <span
            >{{ $t("home.word_address") }}: <input v-model="streetAddress"
          /></span>
        </div>
        <br />
        <span class="error-msg" v-if="!(zipCode && streetAddress)">
          {{ $t("home.missingHomeAddress") }}
        </span>
        <h3>Date of arrival</h3>
        <p class="blue">※ {{ $d(new Date(), "short", $i18n.locale) }}</p>
        <p class="blue">※ {{ $d(new Date(), "long", $i18n.locale) }}</p>
      </div>
      <div>
        <h3>Possible Message Format (i18n)</h3>
        <p>
          ※ LINKED interpolation:
          <span class="blue">{{ $t("home.linked") }}</span>
        </p>
        <p>
          ※ NAMED interpolation:
          <span class="blue">{{ $t("home.hello", { msg: "HEY" }) }}</span>
        </p>
        <p>
          ※ LIST interpolation:
          <span class="blue">{{
            $t("home.hello_list", ["HELLO", "ALOHA", "KONNICHIHA"])
          }}</span>
        </p>
      </div>
      <div>
        <h3>Monthly Price</h3>
        <p class="blue">{{ $n(5000, "currency", $i18n.locale) }}</p>
        ※ こちらの
        <!-- <p class="blue">
          {{ $n(10000, "currency", $i18n.locale, { useGrouping: false }) }}
        </p>
        <p class="blue">
          {{ $n(987654321, "currency", $i18n.locale, { notation: "compact" }) }}
        </p>
        <p class="blue">
          {{
            $n(0.99123, "percent", $i18n.locale, { minimumFractionDigits: 2 })
          }}
        </p>
        <p class="blue">{{ $n(12145281111, "decimal", $i18n.locale) }}</p> -->
      </div>
      <h3>For Questions</h3>
      <span class="blue">{{ $t("home.email") }}</span>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      zipCode: "",
      streetAddress: "",
      name: "",
    };
  },
};
</script>

<style>
.display-info {
  padding-left: 10px;
  color: #c3c1ac;
}
img {
  width: 100%;
  padding-bottom: 15px;
}
.the-post-card {
  background-color: #8d7f8e;
  height: 250px;
  width: auto;
  border: gold 2px solid;
}
h1 {
  margin-bottom: 50px;
}
body {
  color: rgb(76, 71, 71);
  padding: 50px;
  font-size: 14px;
}
.error-msg {
  color: red;
  font-weight: 700px;
}
.child-container {
  line-height: 1;
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
  border: aliceblue 3px solid;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 100px;
  padding-right: 100px;
}

.blue {
  color: rgb(13, 81, 127);
  font-weight: bold;
}
</style>
