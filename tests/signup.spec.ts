import test, { expect } from "@playwright/test";
import { getElementByQAId } from "../utils/common-functions";

// Signup
test('signup', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await (await getElementByQAId(page, 'signup-name')).fill('Tester');
  await (await getElementByQAId(page, 'signup-email')).fill('kaurpoonambaidwan@gmail.com');
  await (await getElementByQAId(page, 'signup-button')).click();
  // Complete account information
  await page.locator('input[value=Mrs]').click();
  await (await getElementByQAId(page, 'password')).fill('P35t3nv1r0m3ntK789');
  await (await getElementByQAId(page, 'days')).selectOption('5');
  await (await getElementByQAId(page, 'months')).selectOption('1');
  await (await getElementByQAId(page, 'years')).selectOption('2000');
  // Address information
  await (await getElementByQAId(page, 'first_name')).fill('Poonamjeet');
  await (await getElementByQAId(page, 'last_name')).fill('Kaur');
  await (await getElementByQAId(page, 'address')).fill('123');
  await (await getElementByQAId(page, 'country')).selectOption('India');
  await (await getElementByQAId(page, 'state')).fill('Punjab');
  await (await getElementByQAId(page, 'city')).fill('Mohali');
  await (await getElementByQAId(page, 'zipcode')).fill('123456');
  await (await getElementByQAId(page, 'mobile_number')).fill('0123456789');
  await (await getElementByQAId(page, 'create-account')).click();
  // Expect success message
  await expect(await getElementByQAId(page, 'account-created')).toHaveText('Account Created!');
  // Continue with the account
  await (await getElementByQAId(page, 'continue-button')).click();
  // Delete Account
  await page.getByRole('link', { name: ' Delete Account' }).click();
  // Expect successful deletion
  await expect(await getElementByQAId(page, 'account-deleted')).toHaveText('Account Deleted!');
  // Delete Account
});
