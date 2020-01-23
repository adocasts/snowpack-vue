<template>
  <main>
    <h3>
      {{ content }}
    </h3>
  </main>
</template>

<script>
module.exports = {
  data: () => ({
    content: `We'll be using web_modules instead of node_modules and thanks to that, we don't
      need a bundler!`,
  }),
};
</script>
