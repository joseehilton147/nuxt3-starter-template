<template>
	<div>
		<p class="fw-bold mb-4">{{ labelValue }}</p>
		<input
			ref="inputElement"
			v-model="dynamicValue"
			v-maska
			:class="inputClass"
			:data-maska="maskValue"
			:type="computedInputType"
			:value="inputValue"
			:required="requiredValue"
			:placeholder="placeholderValue"
			:disabled="disabledValue"
			:name="inputName"
			:autocomplete="disableAutoComplete ? 'nope' : ''"
			@input="$event.target.composing = false"
		/>
	</div>
</template>

<script setup>
	const props = defineProps({
		inputName: {
			type: String,
			default: '',
		},
		labelValue: {
			type: String,
			required: true,
		},
		modelValue: {
			type: [String, Number],
			required: true,
		},
		inputType: {
			type: String,
			default: 'text',
		},
		inputValue: {
			type: [String, Number],
			default: '',
		},
		disabledValue: {
			type: Boolean,
			default: false,
		},
		placeholderValue: {
			type: String,
			default: '',
		},
		disableAutoComplete: {
			type: Boolean,
			default: false,
		},
		requiredValue: {
			type: Boolean,
			default: false,
		},
		maskValue: {
			type: String,
			default: '',
		},
		inputClass: {
			type: String,
			default: '',
		},
	})

	const emit = defineEmits(['onUpdate'])

	const {inputValue, inputType} = toRefs(props)

	const dynamicValue = ref(inputValue.value)
	const computedInputType = computed(() => inputType.value)

	watch(dynamicValue, newDynamicValue => emit('onUpdate', newDynamicValue))
</script>
