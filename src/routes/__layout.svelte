<script>
  import DarkMode from '../components/DarkMode.svelte';
</script>

<nav class="nav-bar">
  <a href="/">Home</a>
  <a href="/play">Play</a>
  <a href="/timeline">Time Line</a>
  <DarkMode />
</nav>
<main>
  <slot/>
</main>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100px;
    background-color: orange;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
  }
  main {
    margin-top: 100px;
    margin-left: 40px;
    margin-right: 40px;
  }
</style>