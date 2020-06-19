<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  text-align: left;
  position: fixed;
  display: flex;
  flex-direction: column;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 20px 50px;
    text-decoration: none;
    color: green;

    &:hover {
      background-color: grey;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
