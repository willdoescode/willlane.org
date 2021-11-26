<script lang="ts">
  export let route: string;

  import { onMount } from 'svelte';

  const routes = {
    "Home": "/",
    "Projects": "projects",
    "Resume": "resume",
  };
</script>

<style lang="scss">
  .nav {
    padding-top: 5%;
    display: flex;
    justify-content: center;

    a {
      padding-right: 2em;
      padding-left: 2em;
      font-family: Chomsky;
      font-size: 2em;
      text-decoration: none;

      &:not(.sep):hover {
        cursor: pointer;
        text-decoration: underline;
      }

      .sep:hover {
        cursor: none;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    .nav {
      flex-direction: column;
      align-items: center;
    }
  }
</style>

<div class="nav">
  {#each Object.entries(routes) as [name, href]}
    <a style={
        route === href 
          ? "font-weight: bold;" 
          : " "
      } 
      href={href}>
      {name}
    </a>
  {/each}
</div>
