<script context="module">
  export const load = ({error, status}) => {
    return {
      props: {
        error,
        status,
      }
    };
  }
</script>

<script lang="ts">
  export let error;
  export let status;
</script>

<style lang="scss">
  .error {
    font-family: Chomsky;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>

<div class="error">
  {#if status === 404}
    <h1>You've found the secret page.</h1>
    <h2>Come back later for the next issue of the paper.</h2>
  {:else}
    <h1>{status}: {error}</h1>
  {/if}
</div>