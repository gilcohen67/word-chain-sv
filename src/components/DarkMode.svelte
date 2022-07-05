<script>
  const swapTheme = () => {
    window.document.body.classList.toggle('dark-mode');
    icon === dark ? (icon = light) : (icon = dark);
  };
  import light from '../assets/light.png'
  import dark from '../assets/dark.png'
  let icon = dark;
</script>

<button on:click={swapTheme}>
  <img class="theme-img" src={icon} alt="Light" />
</button>

<style>
  :global(body.dark-mode) {
    background-color: #000;
    color: #fff;
  }
  button {
    background-color: transparent;
    border: 0;
    border-radius: 100%;
    margin-right: 30px;
  }
  button:hover {
    background-color: rgb(122, 122, 122);
    cursor: pointer;
  }
  .theme-img {
    height: 50px;
    width: 50px;
  }
</style>
