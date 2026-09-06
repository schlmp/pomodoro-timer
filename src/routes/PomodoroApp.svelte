<script lang="ts">
	import { onMount } from 'svelte';
	import bell from '$lib/assets/bell.mp3';
	import TimerButton from './TimerButton.svelte';

	let secondsLeft: number = $state(25 * 60);
	let intervalName: string = $state('Work');
	let play: boolean = $state(true);
	let interval: number;
	let formattedTime: string = $derived(formatTime(secondsLeft));

	let sound: HTMLAudioElement;

	onMount(() => {
		sound = new Audio(bell);
		interval = setInterval(tick, 1000);
	});

	function playPause() {
		if (play) {
			play = false;
			clearInterval(interval);
		} else {
			play = true;
			interval = setInterval(tick, 1000);
		}
	}

	function tick() {
		secondsLeft -= 1;

		if (secondsLeft <= 0) {
			clearInterval(interval);
			play = false;
			sound.play();
		}
	}

	function setNewInterval(name: string, seconds: number) {
		intervalName = name;
		secondsLeft = seconds;
	}

	function formatTime(seconds: number): string {
		let mins: number = Math.floor(seconds / 60);
		let secs: number = seconds % 60;
		return mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0');
	}
</script>

<svelte:head>
	<title>{formattedTime} Pomodoro</title>
</svelte:head>

<div
	class="h-full bg-[url('$lib/assets/tomato.svg')] bg-size-[auto_110%] bg-position-[50%_150%] bg-no-repeat"
>
	<div
		class="flex h-[60%] flex-col justify-end text-center text-[25vmin] font-bold text-white tabular-nums"
	>
		<div class="text-[0.6em]">{intervalName}</div>
		<div class="h-[60%]">{formattedTime}</div>
	</div>
	<div class="flex flex-wrap content-end justify-center">
		<TimerButton disabled={secondsLeft <= 0} text={play ? 'Pause' : 'Play'} onclick={playPause} />
		<TimerButton
			disabled={false}
			text="25 Min."
			onclick={() => {
				setNewInterval('Work', 25 * 60);
			}}
		/>
		<TimerButton
			disabled={false}
			text="5 Min."
			onclick={() => {
				setNewInterval('Short Break', 5 * 60);
			}}
		/>
		<TimerButton
			disabled={false}
			text="20 Min."
			onclick={() => {
				setNewInterval('Long Break', 20 * 60);
			}}
		/>
	</div>
</div>
