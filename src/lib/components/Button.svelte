<script lang="ts">
	let {
		btnLabel,
		btnType,
		btnStyle,
        link,
	}: { btnLabel: string; btnType: string; btnStyle: string; link:string } = $props();
	
    function getBtnStyleClasses(btnStyle:string): string {
		switch (btnStyle) {
			case 'primary':
				return `rounded py-3 px-4 bg-cadetGray-300 hover:bg-cadetGray-600 text-cadetGray-50 my-2`;
			case 'secondary':
				return `rounded py-3 px-4 bg-beige-400 hover:bg-beige-600 text-beige-50 my-2`;
			case 'success':
				return `rounded py-3 px-4 bg-lightBlue-400 hover:bg-lightBlue-600 text-lightBlue-50 my-2`;
			case 'danger':
				return `rounded py-3 px-4 bg-bittersweet-500 hover:bg-bittersweet-700 text-bittersweet-50 my-2`;
			case 'warning':
				return `rounded py-3 px-4 bg-flame-400 hover:bg-flame-600 text-flame-50 my-2`;
			case 'info':
				return `rounded py-3 px-4 bg-paynesGray-200 hover:bg-paynesGray-400 text-paynesGray-600 hover:text-paynesGray-50 my-2`;
			default:
				return `rounded py-3 px-4 bg-cadetGray-300 hover:bg-cadetGray-600 text-cadetGray-50 my-2`;
		}
	}
	let btnStyleClasses = getBtnStyleClasses(btnStyle);
</script>
{#if btnType === 'submit'}
    <button type='submit' class={btnStyleClasses}>{btnLabel}</button>
{:else if btnType === 'reset'}
    <button type='reset' class={btnStyleClasses}>{btnLabel}</button>
{:else if btnType === "anchor"}
    <a  href = {link} class={btnStyleClasses}>{btnLabel}</a>
{/if}

<style>
</style>
