<script context="module">
  const allPosts = import.meta.glob("./*.{md,svx}");

  let body = [];
  for (let path in allPosts) {
    body.push(
      allPosts[path]().then(({ metadata }) => {
        return { path, metadata };
      })
    );
  }

  export const load = async () => {
    const posts = await Promise.all(body);
    return {
      props: {
        posts,
      },
    };
  };
</script>

<script>
  export let posts;
</script>

<ul>
  {#each posts as {path, metadata}}
    <li>
      <a href={`/blog/${path.replace(".md","").replace(".svx","")}`}>{metadata.title}</a>
    </li>
  {/each}
</ul>
