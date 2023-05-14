<template>
	<div class="bg-global-dark-100 b-rd-4 p-16">
		<header>
			<slot name="header" />
		</header>
		<main>
			<slot />
		</main>
		<footer>
			<slot name="footer" />
		</footer>
	</div>
</template>
