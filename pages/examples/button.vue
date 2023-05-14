<script setup>
	const display = reactive({
		style: false,
		outline: false,
		light: false,
		text: false,
		icons: false,
		iconsOnly: false,
		loading: false,
	})

	const loading = reactive({
		text: false,
		iconText: false,
		icon: false,
	})

	function toggleLoading(key) {
		loading[key] = !loading[key]

		setTimeout(() => {
			loading[key] = false
		}, 2000)
	}

	function displayCode(value) {
		display[value] = !display[value]
	}
</script>

<template>
	<div class="m-y-32 container">
		<!-- STYLE -->
		<card-component class="relative">
			<template #header>
				<button-component
					btn-variant="icon"
					btn-class="p-r-8 text-24 absolute top-16 right-16"
					@click="displayCode('style')"
				>
					<Icon name="material-symbols:code" />
				</button-component>
				<h1 class="text-2xl">Style</h1>
				<p class="m-t-12">
					Você pode usar
					<utils-highlight-text-component>btn-style="success"</utils-highlight-text-component> para trocar o
					estilo do botão.
				</p>
				<p class="m-y-12">
					É possível resetar o estilo do botão passando o parâmetro
					<utils-highlight-text-component>reset</utils-highlight-text-component>.
				</p>
				<p><utils-highlight-text-component>primary</utils-highlight-text-component> é o estilo padrão.</p>
			</template>
			<div class="m-t-32 flex gap-16">
				<button-component>Primary</button-component>
				<button-component btn-style="success">Success</button-component>
				<button-component btn-style="info">Info</button-component>
				<button-component btn-style="warning">Warning</button-component>
				<button-component btn-style="danger">Danger</button-component>
			</div>
			<template #footer>
				<utils-code-component v-show="display.style" class="m-t-16">
					<!-- prettier-ignore -->
					{{ '<button-component btn-style="success">Success</button-component>' }}
				</utils-code-component>
			</template>
		</card-component>

		<!-- LIGHT -->
		<card-component class="m-y-32 relative">
			<template #header>
				<button-component
					btn-variant="icon"
					btn-class="p-r-8 text-24 absolute top-16 right-16"
					@click="displayCode('light')"
				>
					<Icon name="material-symbols:code" />
				</button-component>
				<h1 class="text-2xl">Outline</h1>
				<p class="m-t-12">
					Você pode usar
					<utils-highlight-text-component>btn-variant="outline"</utils-highlight-text-component> para que o
					botão tenha apenas uma borda com o estilo definido.
				</p>
			</template>
			<div class="m-t-32 flex gap-16">
				<button-component btn-variant="outline">Primary</button-component>
				<button-component btn-style="success" btn-variant="outline">Success</button-component>
				<button-component btn-style="info" btn-variant="outline">Info</button-component>
				<button-component btn-style="warning" btn-variant="outline">Warning</button-component>
				<button-component btn-style="danger" btn-variant="outline">Danger</button-component>
			</div>
			<template #footer>
				<utils-code-component v-show="display.outline" class="m-t-16">
					<!-- prettier-ignore -->
					{{ '<button-component btn-variant="outline">Success</button-component>' }}
				</utils-code-component>
			</template>
		</card-component>

		<!-- LIGHT -->
		<card-component class="m-y-32 relative">
			<template #header>
				<button-component
					btn-variant="icon"
					btn-class="p-r-8 text-24 absolute top-16 right-16"
					@click="displayCode('light')"
				>
					<Icon name="material-symbols:code" />
				</button-component>
				<h1 class="text-2xl">Light</h1>
				<p class="m-t-12">
					Você pode usar
					<utils-highlight-text-component>btn-variant="light"</utils-highlight-text-component> para que o
					texto tenha a mesma cor padrão porém se sobresaindo.
				</p>
			</template>
			<div class="m-t-32 flex gap-16">
				<button-component btn-variant="light">Primary</button-component>
				<button-component btn-style="success" btn-variant="light">Success</button-component>
				<button-component btn-style="info" btn-variant="light">Info</button-component>
				<button-component btn-style="warning" btn-variant="light">Warning</button-component>
				<button-component btn-style="danger" btn-variant="light">Danger</button-component>
			</div>
			<template #footer>
				<utils-code-component v-show="display.light" class="m-t-16">
					<!-- prettier-ignore -->
					{{ '<button-component btn-variant="light">Success</button-component>' }}
				</utils-code-component>
			</template>
		</card-component>

		<!-- TEXT -->
		<card-component class="m-y-32 relative">
			<template #header>
				<button-component
					btn-variant="icon"
					btn-class="p-r-8 text-24 absolute top-16 right-16"
					@click="displayCode('text')"
				>
					<Icon name="material-symbols:code" />
				</button-component>
				<h1 class="text-2xl">Text</h1>
				<p class="m-t-12">
					Você pode usar
					<utils-highlight-text-component>btn-variant="text"</utils-highlight-text-component> para ter apenas
					um texto na cor padrão.
				</p>
			</template>
			<div class="m-t-32 flex gap-16">
				<button-component btn-variant="text">Primary</button-component>
				<button-component btn-style="success" btn-variant="text">Success</button-component>
				<button-component btn-style="info" btn-variant="text">Info</button-component>
				<button-component btn-style="warning" btn-variant="text">Warning</button-component>
				<button-component btn-style="danger" btn-variant="text">Danger</button-component>
			</div>
			<template #footer>
				<utils-code-component v-show="display.text" class="m-t-16">
					<!-- prettier-ignore -->
					{{ '<button-component btn-variant="text">Success</button-component>' }}
				</utils-code-component>
			</template>
		</card-component>

		<!-- ICONS -->
		<card-component class="m-y-32 relative">
			<template #header>
				<button-component
					btn-variant="icon"
					btn-class="p-r-8 text-24 absolute top-16 right-16"
					@click="displayCode('icons')"
				>
					<Icon name="material-symbols:code" />
				</button-component>
				<h1 class="text-2xl">Icons</h1>
				<p class="m-y-12">
					Você pode usar o prop
					<utils-highlight-text-component>icon</utils-highlight-text-component> para adicionar um icone ao
					botão.
				</p>
				<p>
					Para adicionar um icone após o texto, basta adicionar o prop
					<utils-highlight-text-component>btn-icon-position="end"</utils-highlight-text-component>.
				</p>
			</template>
			<div class="m-t-32">
				<div class="flex gap-16">
					<button-component btn-icon="bx:accessibility">Primary</button-component>
					<button-component btn-variant="outline" btn-icon="bx:atom">Outline</button-component>
					<button-component btn-variant="light" btn-icon="bx:smile">Light</button-component>
					<button-component btn-variant="text" btn-icon="bx:bug">Text</button-component>
				</div>
				<div class="m-t-32 flex gap-16">
					<button-component btn-style="info" btn-icon="bx:accessibility" btn-icon-position="end"
						>Primary</button-component
					>
					<button-component btn-style="info" btn-variant="outline" btn-icon="bx:atom" btn-icon-position="end"
						>Outline</button-component
					>
					<button-component btn-style="info" btn-variant="light" btn-icon="bx:smile" btn-icon-position="end"
						>Light</button-component
					>
					<button-component btn-style="info" btn-variant="text" btn-icon="bx:bug" btn-icon-position="end"
						>Text</button-component
					>
				</div>
			</div>
			<template #footer>
				<utils-code-component v-show="display.icons" class="m-t-16">
					<!-- prettier-ignore -->
					{{ '<button-component btn-icon="bx:bug">Primary</button-component>' }}
				</utils-code-component>
			</template>
		</card-component>

		<!-- ICON ONLY -->
		<card-component class="m-y-32 relative">
			<template #header>
				<button-component
					btn-variant="icon"
					btn-class="p-r-8 text-24 absolute top-16 right-16"
					@click="displayCode('iconsOnly')"
				>
					<Icon name="material-symbols:code" />
				</button-component>
				<h1 class="text-2xl">Icon Only</h1>
				<p class="m-t-12">
					Você pode usar
					<utils-highlight-text-component>btn-icon="bx:bug"</utils-highlight-text-component> para exibir
					apenas o ícone.
				</p>
			</template>
			<div class="m-t-32 flex gap-16">
				<button-component btn-icon="bx:accessibility" />
				<button-component btn-variant="outline" btn-icon="bx:atom" />
				<button-component btn-variant="light" btn-icon="bx:smile" />
				<button-component btn-variant="text" btn-icon="bx:bug" />
			</div>
			<template #footer>
				<utils-code-component v-show="display.iconsOnly" class="m-t-16">
					<!-- prettier-ignore -->
					{{ '<button-component btn-icon="bx:accessibility" />' }}
				</utils-code-component>
			</template>
		</card-component>

		<!-- LOADING -->
		<card-component class="m-y-32 relative">
			<template #header>
				<button-component
					btn-variant="icon"
					btn-class="p-r-8 text-24 absolute top-16 right-16"
					@click="displayCode('loading')"
				>
					<Icon name="material-symbols:code" />
				</button-component>
				<h1 class="text-2xl">Loading</h1>
				<p class="m-t-12">
					Você pode usar o prop
					<utils-highlight-text-component>display-loading</utils-highlight-text-component> para exibir o
					loading.
				</p>
			</template>
			<div class="m-t-32 flex gap-16">
				<button-component :display-loading="loading.text" @click="toggleLoading('text')"
					>Carregar mais</button-component
				>
				<button-component
					btn-icon="bx:cloud-upload"
					:display-loading="loading.iconText"
					@click="toggleLoading('iconText')"
					>Enviar</button-component
				>
				<button-component
					btn-icon="bx:cloud-upload"
					:display-loading="loading.icon"
					@click="toggleLoading('icon')"
				/>
			</div>
			<template #footer>
				<utils-code-component v-show="display.loading" class="m-t-16">
					<!-- prettier-ignore -->
					{{ '<button-component :display-loading="bool" />' }}
				</utils-code-component>
			</template>
		</card-component>
	</div>
</template>
