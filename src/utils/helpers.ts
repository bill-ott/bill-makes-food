import type { CollectionEntry } from 'astro:content';

type Ingredient = CollectionEntry<'recipes'>['data']['ingredients'][number];

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

function sortPostsByDate<T extends { data: { publishDate: Date } }>(
	posts: T[],
	limit?: number,
	direction: 'asc' | 'desc' = 'desc',
) {
	return [...posts]
		.sort((a, b) => {
			const diff = b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
			return direction === 'desc' ? diff : -diff;
		})
		.slice(0, limit);
}

function createEssayData(essay: CollectionEntry<'blog'>) {
	return {
		href: `/blog/${essay.id}`,
		title: essay.data.title,
		dateRaw: formatRawDate(essay.data.publishDate),
		publishDate: formatDate(essay.data.publishDate),
		summary: essay.data.summary,
	};
}

function createRecipeData(recipe: CollectionEntry<'recipes'>) {
	return {
		href: `/recipes/${recipe.id}`,
		title: recipe.data.title,
		dateRaw: formatRawDate(recipe.data.publishDate),
		publishDate: formatDate(recipe.data.publishDate),
		cookTime: recipe.data.cookTime,
		summary: recipe.data.summary,
		tags: recipe.data.tags,
		heroImage: recipe.data.heroImage,
	};
}

function groupIngredients(ingredients: Ingredient[]) {
    const groups: { label: string | undefined; items: Ingredient[] }[] = [];
    ingredients.forEach((ingredient) => {
        const lastGroup = groups.at(-1);
        if (lastGroup && lastGroup.label === ingredient.group) {
            lastGroup.items.push(ingredient);
        } else {
            groups.push({ label: ingredient.group, items: [ingredient] });
        }
    });
    const rank = (group: { label: string | undefined }) => (group.label === undefined ? 0 : 1);
    return [...groups].sort((a, b) => rank(a) - rank(b));
}

export { formatRawDate, formatDate, sortPostsByDate, createEssayData, createRecipeData, groupIngredients };