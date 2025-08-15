<script setup lang="ts">
	const { disableHr } = defineProps<{ disableHr?: boolean }>();
</script>

<template>
	<div class="flex justify-center py-6">
		<div class="flex items-center gap-8 w-1/2">
			<hr v-if="!disableHr" class="h-[2px] flex-1 border-none bg-red-700 my-4" />
			<slot />
			<hr v-if="!disableHr" class="h-[2px] flex-1 border-none bg-red-700 my-4" />
		</div>
	</div>
</template>
