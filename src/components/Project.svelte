<script lang="ts">
  import { getLang, LanguageKey } from '../helpers/languages';

  export let title: string;
  export let description: string;
  export let emoji: string;
  export let language: LanguageKey;

  let lang = getLang(language);
</script>

<h1>{title}</h1>
<span>{emoji}</span>
<h2>{description}</h2>
<h2>{lang.name}</h2>
<img src={lang.img} alt="">
