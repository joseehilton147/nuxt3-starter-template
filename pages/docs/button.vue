<script setup>
	useHead({
		title: 'Botões',
	})
</script>

<template>
	<card-component class="relative">
		<template #header>
			<h1 class="text-2xl">Variantes</h1>
			<p class="m-y-12">
				Você pode estilizar o botão de acordo com alguns estlos pré definidos, alterando o valor pelo prop
				<code>variant</code>.
			</p>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component>solid</button-component>
			<button-component variant="outline">outline</button-component>
			<button-component variant="soft">soft</button-component>
			<button-component variant="ghost">ghost</button-component>
			<button-component variant="link">link</button-component>
			<button-component variant="icon">icon</button-component>
		</div>
	</card-component>

	<card-component class="m-y-32 relative">
		<template #header>
			<h1 class="text-2xl">Cores</h1>
			<p class="m-y-12">Existem algumas cores pré definidas, você pode alterar pelo prop <code>color</code>.</p>
		</template>
		<div class="m-t-32 flex flex-col">
			<div class="flex items-center gap-16">
				<button-component color="primary">solid</button-component>
				<button-component variant="outline" color="primary">outline</button-component>
				<button-component variant="soft" color="primary">soft</button-component>
				<button-component variant="ghost" color="primary">ghost</button-component>
				<button-component variant="link" color="primary">link</button-component>
				<button-component variant="icon" color="primary">icon</button-component>
				<code>color="primary"</code>
			</div>
			<div class="m-t-16 flex items-center gap-16">
				<button-component color="purple">solid</button-component>
				<button-component variant="outline" color="purple">outline</button-component>
				<button-component variant="soft" color="purple">soft</button-component>
				<button-component variant="ghost" color="purple">ghost</button-component>
				<button-component variant="link" color="purple">link</button-component>
				<button-component variant="icon" color="purple">icon</button-component>
				<code>color="purple"</code>
			</div>
			<div class="m-t-16 flex items-center gap-16">
				<button-component color="red">solid</button-component>
				<button-component variant="outline" color="red">outline</button-component>
				<button-component variant="soft" color="red">soft</button-component>
				<button-component variant="ghost" color="red">ghost</button-component>
				<button-component variant="link" color="red">link</button-component>
				<button-component variant="icon" color="red">icon</button-component>
				<code>color="red"</code>
			</div>
			<div class="m-t-16 flex items-center gap-16">
				<button-component color="green">solid</button-component>
				<button-component variant="outline" color="green">outline</button-component>
				<button-component variant="soft" color="green">soft</button-component>
				<button-component variant="ghost" color="green">ghost</button-component>
				<button-component variant="link" color="green">link</button-component>
				<button-component variant="icon" color="green">icon</button-component>
				<code>color="green"</code>
			</div>
			<div class="m-t-16 flex items-center gap-16">
				<button-component color="gray">solid</button-component>
				<button-component variant="outline" color="gray">outline</button-component>
				<button-component variant="soft" color="gray">soft</button-component>
				<button-component variant="ghost" color="gray">ghost</button-component>
				<button-component variant="link" color="gray">link</button-component>
				<button-component variant="icon" color="gray">icon</button-component>
				<code>color="gray"</code>
			</div>
			<div class="m-t-16 flex items-center gap-16">
				<button-component color="yellow">solid</button-component>
				<button-component variant="outline" color="yellow">outline</button-component>
				<button-component variant="soft" color="yellow">soft</button-component>
				<button-component variant="ghost" color="yellow">ghost</button-component>
				<button-component variant="link" color="yellow">link</button-component>
				<button-component variant="icon" color="yellow">icon</button-component>
				<code>color="yellow"</code>
			</div>
			<div class="m-t-16 flex items-center gap-16">
				<button-component color="cyan">solid</button-component>
				<button-component variant="outline" color="cyan">outline</button-component>
				<button-component variant="soft" color="cyan">soft</button-component>
				<button-component variant="ghost" color="cyan">ghost</button-component>
				<button-component variant="link" color="cyan">link</button-component>
				<button-component variant="icon" color="cyan">icon</button-component>
				<code>color="cyan"</code>
			</div>
			<div class="m-t-16 flex items-center gap-16">
				<button-component color="blue">solid</button-component>
				<button-component variant="outline" color="blue">outline</button-component>
				<button-component variant="soft" color="blue">soft</button-component>
				<button-component variant="ghost" color="blue">ghost</button-component>
				<button-component variant="link" color="blue">link</button-component>
				<button-component variant="icon" color="blue">icon</button-component>
				<code>color="blue"</code>
			</div>
		</div>
	</card-component>

	<card-component class="m-y-32 relative">
		<template #header>
			<h1 class="text-2xl">Texto</h1>
			<p class="m-y-12">Use o slot padrão para definir o texto do botão.</p>
			<p>Voce também pode usar o prop <code>label</code>.</p>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component label="Exemplo" />
		</div>
	</card-component>

	<card-component class="m-y-32 relative">
		<template #header>
			<h1 class="text-2xl">Link</h1>
			<p class="m-y-12">
				Use o prop <code>to</code> para adicionar um link ao botão, o tipo do marcador irá ser alterado de
				button para nuxt-link.
			</p>
			<p class="m-y-12">Você tambem pode usar o prop <code>target</code> para definir onde abrir o link.</p>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component to="https://www.google.com.br" target="_blank" label="Ir para o Google" />
		</div>
	</card-component>

	<card-component class="relative">
		<template #header>
			<h1 class="text-2xl">Truncate</h1>
			<p class="m-y-12">Use o prop <code>truncate</code> para encurtar o texto do botão.</p>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component :truncate="true" class="w-80" label="Botão com texto muito comprido" />
		</div>
	</card-component>

	<card-component class="m-y-32 relative">
		<template #header>
			<h1 class="text-2xl">Desativar</h1>
			<p class="m-y-12">Use o prop <code>disabled</code> para desativar o botão.</p>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component :disabled="true" label="Exemplo" />
		</div>
	</card-component>

	<card-component class="relative">
		<template #header>
			<h1 class="text-2xl">Loading</h1>
			<p class="m-y-12">
				Use o prop <code>loading</code> para mostrar um ícone de carregamento e desativar o botão.
			</p>
			<p>Use o prop <code>loading-icon</code> para alterar o ícone definido.</p>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component :loading="true" label="Exemplo" />
		</div>
	</card-component>

	<card-component class="m-y-32 relative">
		<template #header>
			<h1 class="text-2xl">Icone</h1>
			<p class="m-y-12">
				Use qualquer icone da biblioteca
				<a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a> e use o prop
				<code>icon</code> para definir.
			</p>
			<p>
				Use o prop <code>icon-position</code> para alterar a posição do icone entre <code>left</code> e
				<code>right</code>.
			</p>
			<p class="m-y-12">
				O prop <code>label</code> ou o slot é opcional, então se quiser utilizar o botão apenas como ícone,
				basta remove-los.
			</p>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component icon="material-symbols:star" label="Exemplo" />
			<button-component icon="material-symbols:star" />
		</div>
	</card-component>

	<card-component class="relative">
		<template #header>
			<h1 class="text-2xl">Block</h1>
			<p class="m-y-12">
				Use o prop <code>block</code> para fazer o botão preencher a largura total do container.
			</p>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component block label="Exemplo" />
		</div>
	</card-component>

	<card-component class="m-y-32 relative">
		<template #header>
			<h1 class="text-2xl">Tamanho do texto</h1>
			<p class="m-y-12">Use o prop <code>text-size</code> para alterar o tamanho do texto.</p>
			<small class="m-y-12">O padrão definido é <code>md</code>.</small>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component text-size="xs" label="xs" />
			<button-component text-size="sm" label="sm" />
			<button-component label="md" />
			<button-component text-size="lg" label="lg" />
			<button-component text-size="xl" label="xl" />
			<button-component text-size="2xl" label="2xl" />
			<button-component text-size="3xl" label="3xl" />
		</div>
	</card-component>

	<card-component class="m-y-32 relative">
		<template #header>
			<h1 class="text-2xl">Radius</h1>
			<p class="m-y-12">Use o prop <code>radius</code> para alterar como o botão é arrendodado.</p>
			<small class="m-y-12">O padrão definido é <code>xs</code>.</small>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component radius="disabled" label="disabled" />
			<button-component radius="xs" label="xs" />
			<button-component radius="sm" label="sm" />
			<button-component label="md" />
			<button-component radius="lg" label="lg" />
			<button-component radius="xl" label="xl" />
			<button-component radius="full" label="full" />
		</div>
	</card-component>

	<card-component class="m-y-32 relative">
		<template #header>
			<h1 class="text-2xl">Gap</h1>
			<p class="m-y-12">Use o prop <code>gap</code> para definir o espaçamento entre elementos dentro do botão</p>
			<small class="m-y-12">O padrão definido é <code>sm</code>.</small>
		</template>
		<div class="m-t-32 flex gap-16">
			<button-component gap="disabled" label="disabled" icon="material-symbols:star" />
			<button-component gap="xs" label="xs" icon="material-symbols:star" />
			<button-component gap="sm" label="sm" icon="material-symbols:star" />
			<button-component label="md" icon="material-symbols:star" />
			<button-component gap="lg" label="lg" icon="material-symbols:star" />
			<button-component gap="xl" label="xl" icon="material-symbols:star" />
		</div>
	</card-component>
</template>