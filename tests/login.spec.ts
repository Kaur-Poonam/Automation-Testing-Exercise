import test, { expect } from "@playwright/test";
import { getElementByQAId } from "../utils/common-functions";

test('login with correct credentials', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
  
    // Click login link
    await page.getByRole('link', { name: ' Signup / Login' }).click();  
    const loginField = await getElementByQAId(page, 'login-email');
    await loginField.fill('kaur.poonamjeet123@gmail.com');
    const passField = await getElementByQAId(page, 'login-password');
    await passField.fill('P35t3nv1r0m3ntK789');
    await (await getElementByQAId(page, 'login-button')).click();
    await expect(page.getByText('PK')).toBeVisible();
  });
  