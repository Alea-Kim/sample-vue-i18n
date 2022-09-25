<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav-inline">
        <ol>
          <li class="nav-inline blue">
            <RouterLink to="/">{{ $t("nav.home") }}</RouterLink>
          </li>
          <li class="nav-inline blue">
            <RouterLink to="/about">{{ $t("nav.about") }}</RouterLink>
          </li>
          <li class="nav-inline">
            <select v-model="$i18n.locale">
              <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
              >
                {{ locale }}
              </option>
            </select>
          </li>
        </ol>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1;
  max-height: 100vh;
}
.blue {
  color: rgb(13, 81, 127);
  font-weight: bold;
}

.nav-inline {
  display: inline-block;
}
nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: nav-inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
