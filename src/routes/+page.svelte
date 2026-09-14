<script>
	import PomodoroApp from './PomodoroApp.svelte';
</script>

<PomodoroApp></PomodoroApp>

<style>
	:global(html),
	:global(body) {
		margin: 0;
		height: 100%;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
			'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
		background-image: linear-gradient(black 70%, rgb(36, 133, 25));
	}
</style>
