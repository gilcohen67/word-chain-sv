<script lang="ts">
  const getWords = async () => {
    const res = await fetch('http://localhost:8080/words');
    const data = await res.json();
    return data;
  };
  let promise = getWords();
</script>

<main class="app">
  <h1>Home</h1>
  {#await promise then { words }}
    {#each words as word}
      <h1 class="word">{word}</h1>
    {/each}
  {/await}
</main>
