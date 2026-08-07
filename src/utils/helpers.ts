function formatRawDate(date: Date) {
	return date.toISOString().split('T')[0];
}

function formatDate(date: Date) {
	return date.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC',
	});
}

export { formatRawDate, formatDate };