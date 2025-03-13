import { test, expect } from '@playwright/test';
import { env } from 'process';

// Navigate to the website
test('page has expected title', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Expect a title to match
  await expect(page).toHaveTitle('Automation Exercise');
});

// Signup
test('signup', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator(`[data-qa="signup-name"]`).fill('QA');
  await page.locator(`[data-qa="signup-email"]`).fill('kaur.poonamjeet789@gmail.com');
  await page.locator(`[data-qa="signup-button"]`).click();
  // Complete account information
  await page.locator('input[value=Mrs]').click();
  await page.locator(`[data-qa="password"]`).fill('P35t3nv1r0m3ntK789');
  await page.locator(`[data-qa="days"]`).selectOption('5');
  await page.locator(`[data-qa="months"]`).selectOption('1');
  await page.locator(`[data-qa="years"]`).selectOption('2000');
  // Address information
  await page.locator(`[data-qa="first_name"]`).fill('Poonamjeet');
  await page.locator(`[data-qa="last_name"]`).fill('Kaur');
  await page.locator(`[data-qa="address"]`).fill('123');
  await page.locator(`[data-qa="country"]`).selectOption('India');
  await page.locator(`[data-qa="state"]`).fill('Punjab');
  await page.locator(`[data-qa="city"]`).fill('Mohali');
  await page.locator(`[data-qa="zipcode"]`).fill('123456');
  await page.locator(`[data-qa="mobile_number"]`).fill('0123456789');
  await page.locator(`[data-qa="create-account"]`).click();
  // Expect success message
  await expect(page.locator(`[data-qa="account-created"]`)).toHaveText('Congratulations! Your new account has been successfully created!');
});


test('login with correct credentials', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Click login link
  await page.getByRole('link', { name: ' Signup / Login' }).click();  
  await page.locator(`[data-qa="login-email"]`).fill('kaur.poonamjeet123@gmail.com');
  await page.locator(`[data-qa="login-password"]`).fill(env.PASS || '');   
  await page.locator(`[data-qa="login-button"]`).click();                   

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
