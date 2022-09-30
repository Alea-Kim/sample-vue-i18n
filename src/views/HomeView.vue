<template>
  <main>
    <div class="child-container">
      <div>
        <h3 class="blue">{{ $t("home.title") }}</h3>
        {{ $t("home.word_sample") }}:
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
        <span>{{ $t("home.word_name") }}: <input v-model="name" /></span>

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
          {{ $t("home.err_msg_missingHomeAddress") }}
        </span>
        <h4>{{ $t("home.word_dateArrival") }}</h4>
        <p class="blue">※ {{ $d(new Date(), "short", $i18n.locale) }}</p>
        <p class="blue">※ {{ $d(new Date(), "long", $i18n.locale) }}</p>
      </div>
      <div>
        <h4>{{ $t("home.word_price") }}</h4>
        <p class="blue">{{ $n(5000, "currency", $i18n.locale) }}</p>
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
      <hr />
      <div>
        <h4>Possible Message Format (i18n)</h4>
        <p>
          ※ LINKED interpolation:
          <span class="blue">{{ $t("home.linked") }}</span>
        </p>
        <p>
          ※ NAMED interpolation:
          <span class="blue">{{
            $t("home.hello", { msg: "This is a variable" })
          }}</span>
        </p>
        <p>
          ※ LIST interpolation:
          <span class="blue">{{
            $t("home.hello_list", ["VAR1", "VAR2", "VAR3"])
          }}</span>
        </p>
        <p>
          ※ LITERAL interpolation:
          <span class="blue">{{ $t("home.email") }}</span>
        </p>
      </div>
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
  background-color: #3f3b3f;
  height: 220px;
  width: auto;
  border: #c3c1ac 2px solid;
}
h3 {
  margin-bottom: 30px;
}
body {
  color: rgb(76, 71, 71);
  padding: 10px;
  font-size: 12px;
  background: aliceblue;
}
.error-msg {
  color: red;
  font-weight: 700px;
}
.child-container {
  background: white;
  line-height: 1;
  max-width: 350px;
  margin: auto;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 100px;
  padding-right: 100px;
}

.blue {
  color: rgb(13, 81, 127);
  font-weight: bold;
}
</style>
