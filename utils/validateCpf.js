export const useValidateCPF = value => {
	const cpfValue = value.replace(/\D/g, '')
	const cpfDigits = Array.from(cpfValue).map(Number)

	const firstSum = cpfDigits.slice(0, 9).reduce((sum, digit, index) => sum + digit * (10 - index), 0)
	const firstDigit = (firstSum * 10) % 11

	if (firstDigit !== cpfDigits[9]) {
		return false
	}

	const secondSum = cpfDigits.slice(0, 10).reduce((sum, digit, index) => sum + digit * (11 - index), 0)
	const secondDigit = (secondSum * 10) % 11

	if (secondDigit !== cpfDigits[10]) {
		return false
	}

	return true
}
