<script lang="ts">
  export let title: string;
  export let description: string;
  export let image = "https://i.imgur.com/NzvGgh8.jpg";
</script>

<meta property="og:site_name" content="William Lane" />
<meta property="og:url" content="https://www.willlane.org" />
<meta property="og:title" content={title} />
<meta property="og:type" content="article" />
<meta name="twitter:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
