<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">nuxtLearning</h1>
      <h2 class="subtitle">My first</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <div class="alert alert-primary" role="alert">
    This is a primary alert—check it out!
  </div>
      <button
        type="button"
        class="btn btn-secondary"
        data-toggle="tooltip"
        data-placement="top"
        title="Tooltip on top"
      >Tooltip on top</button>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  mounted(){
    $(function () {
       $('[data-toggle="tooltip"]').tooltip()
    })
  }
  
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
