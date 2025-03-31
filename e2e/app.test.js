import { expect, test } from '@playwright/test';

test.describe('alexburgos.dev Website Tests', () => {
	test('home page loads all main components and content', async ({ page }) => {
		// Navigate to the home page
		await page.goto('/');

		// Check Header
		await expect(page.locator('h1')).toBeVisible();
		await expect(page.locator('h1')).toHaveText('alex.burgos');

		// Check About section
		await expect(page.locator('div.px-6.lg\\:px-0.lg\\:w-\\[912px\\].mx-auto.mb-20.md\\:mb-24')).toBeVisible();
		await expect(page.locator('div.px-6.lg\\:px-0.lg\\:w-\\[912px\\].mx-auto.mb-20.md\\:mb-24 p')).toHaveText(/Hi! I'm Alex/);

		// Check Projects section
		await expect(page.locator('.carousel')).toBeVisible();
		await expect(page.locator('.carousel-item')).toHaveCount(5);

		// Check if project cards are visible and have content
		const projectCards = page.locator('.carousel-item');
		for (let i = 0; i < 5; i++) {
			await expect(projectCards.nth(i)).toBeVisible();
			await expect(projectCards.nth(i).locator('h3')).toBeVisible();
			await expect(projectCards.nth(i).locator('p')).toHaveCount(3);
		}

		// Check Footer
		await expect(page.locator('footer')).toBeVisible();

		// Check footer links
		const footerLinks = [
			'RESUME',
			'EMAIL',
			'GITHUB',
			'LINKEDIN'
		];

		for (const linkText of footerLinks) {
			await expect(page.locator(`a:has-text("${linkText}")`)).toBeVisible();
		}

		// Check theme toggle
		await expect(page.locator('button:has-text("DARK MODE")')).toBeVisible();
	});

	test('project carousel navigation works', async ({ page }) => {
		await page.goto('/');

		// Check if navigation buttons are visible on desktop
		await expect(page.locator('button[aria-label="Previous project"]')).toBeVisible();
		await expect(page.locator('button[aria-label="Next project"]')).toBeVisible();

		// Test navigation (click next)
		await page.locator('button[aria-label="Next project"]').click();
		// Wait for smooth scroll animation
		await page.waitForTimeout(500);
	});

	test('theme toggle functionality', async ({ page }) => {
		await page.goto('/');

		const themeButton = page.locator('button:has-text("DARK MODE")');
		await expect(themeButton).toBeVisible();

		// Click theme toggle
		await themeButton.click();

		// Check if theme attribute changed
		const htmlElement = await page.locator('html');
		await expect(htmlElement).toHaveAttribute('data-theme', 'lofi');
	});
});
