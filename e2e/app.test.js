import { expect, test } from '@playwright/test';

test.describe('alexburgos.dev Website Tests', () => {
	test('home page loads all components and content', async ({ page }) => {
		await page.goto('/');

		await expect(page.locator('h1')).toBeVisible();
		await expect(page.locator('h1')).toHaveText('alex.burgos');

		await expect(
			page.locator('div.px-6.lg\\:px-0.lg\\:w-\\[912px\\].mx-auto.mb-20.md\\:mb-24')
		).toBeVisible();
		await expect(
			page.locator('div.px-6.lg\\:px-0.lg\\:w-\\[912px\\].mx-auto.mb-20.md\\:mb-24 p')
		).toHaveText(/Hi! I'm Alex/);

		await expect(page.locator('footer')).toBeVisible();

		await expect(page.locator('button:has-text("DARK MODE")')).toBeVisible();
	});

	test('project carousel navigation works', async ({ page }) => {
		await page.goto('/');

		await expect(page.locator('button[aria-label="Previous project"]')).toBeVisible();
		await expect(page.locator('button[aria-label="Next project"]')).toBeVisible();

		await page.locator('button[aria-label="Next project"]').click();
		await page.waitForTimeout(500);
	});

	test('theme toggle button works', async ({ page }) => {
		await page.goto('/');

		const themeButton = page.locator('button:has-text("DARK MODE")');
		await expect(themeButton).toBeVisible();

		await themeButton.click();

		const htmlElement = await page.locator('html');
		await expect(htmlElement).toHaveAttribute('data-theme', 'lofi');
	});
});
