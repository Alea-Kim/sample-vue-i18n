<template>
  <div class="about">
    <div>
      <img src="@/assets/images/coverphoto.jpeg" />
      <h1>About the Artist</h1>
      <span class="blue">{{ $t("about.full_name") }}</span>
      <span class="blue">{{ $t("about.about_me") }}</span>
    </div>
  </div>
</template>

<script></script>
<style>
body {
  padding: 30px;
  line-height: 2;
}
img {
  max-width: 500px;
}
.about {
  min-height: 60vh;
  position: relative;
  display: flex;
  width: 100%;
  height: 90%;
}
.about h1 {
  color: rgb(76, 71, 71);
}
.blue {
  color: rgb(13, 81, 127);
  font-weight: bold;
}

.about div {
  width: 90%;
  height: 90%;
  text-align: center;
  margin: auto;
  position: relative;
}

.about span,
.about h1 {
  display: block;
}
</style>
