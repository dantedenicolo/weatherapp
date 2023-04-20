<script>
</script>

<slot />

<style>
    :global(body) {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: grid;
        place-content: center;
        min-height: 100vh;
        margin: 0;
        background: #111;
        color: white;
    }

    :global(*, *::after, *::before) {
        box-sizing: border-box;
    }

    :global(h1, h2, h3, h4, h5) {
        margin: 0;
    }
</style>    