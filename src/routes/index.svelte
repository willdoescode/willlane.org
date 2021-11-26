<script lang="ts">
  import Header from '../components/Header.svelte';
  import Metadata from '../components/Metadata.svelte';
  import Project from "../components/Project.svelte";

  let pageTitle = 'William Lane';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <Metadata title="William Lane" description="William Lane portfolio site." />
</svelte:head>

<style lang="scss">
  @font-face {
    font-family: 'Chomsky';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Chomsky.otf');
  }

  body {
    background-color: #ECECEC;
  }
</style>

<Header>
</Header>
