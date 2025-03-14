import test, { expect } from "@playwright/test";

test('page has expected title', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Expect a title to match
  await expect(page).toHaveTitle('Automation Exercise');
  // Expect correct header tabs and links appear
  const homeLink = page.getByRole('link', { name: ' Home' });
  await expect(homeLink).toBeVisible();
  const productsLink = page.getByRole('link', { name: ' Products' });
  await expect(productsLink).toBeVisible();
  const cartLink = page.getByRole('link', { name: ' Cart' });
  await expect(cartLink).toBeVisible();
  const signupLogin = page.getByRole('link', { name: ' Signup / Login' });
  await expect(signupLogin).toBeVisible();
  const apiTestingLink = page.getByRole('link', { name: ' API Testing' });
  await expect(apiTestingLink).toBeVisible();
  const videoTutorials = page.getByRole('link', { name: ' Video Tutorials' });
  await expect(videoTutorials).toBeVisible();
  const contactUs = page.getByRole('link', { name: ' Contact us' });
  await expect(contactUs).toBeVisible();
});
