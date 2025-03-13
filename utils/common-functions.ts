import { Locator, Page } from "@playwright/test";

export async function getElementByQAId(page: Page, Id: string): Promise<Locator> {
    return page.locator(`[data-qa='${Id}']`);
  }
  