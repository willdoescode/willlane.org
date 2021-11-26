<script lang="ts">
  import { getQuote } from '../helpers/quotes';
</script>

<style lang="scss">
  header {
    display: flex;
    padding: 5%;
    align-items: center;
    justify-content: center;

    h1 {
      color: #3B3B3B;
      font-family: Chomsky;
      font-size: 3.5em;
    }

    .name-and-quote {
      padding: 5%;
      display: flex;
      flex-direction: column;
    
      max-width: 20%;
    }
  }

  .quote-loading, .quote-content, .quote-author {
    font-family: Chomsky;
  }

  @media only screen and (max-width: 1000px) {
    header {
      flex-direction: column;

      .name-and-quote {
        max-width: 50%;
        text-align: center;
      }
    }
  }

</style>

<header>
  <img class="pfp" src="https://avatars.githubusercontent.com/u/53620720?v=4" alt="" >
  <div class="name-and-quote">
    <h1 class="title">Hi, I'm Will.</h1>

    {#await getQuote()}
      <h2 class="quote-loading">Loading quote..</h2> 
    {:then quote} 
      <h2 class="quote-content">{quote.content}</h2> 
      <h3 class="quote-author">- {quote.author}</h3> 
    {/await}
  </div>
</header>


<slot />
