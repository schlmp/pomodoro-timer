<script lang="ts">
	let { onclick, disabled, text }: { onclick: () => void; disabled: boolean; text: string } =
		$props();
</script>

<button
	{disabled}
	class="m-1 rounded-2xl border-none bg-white px-4 py-2 text-base disabled:opacity-50"
	{onclick}
>
	{text}
</button>
