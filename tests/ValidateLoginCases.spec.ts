import {test, expect} from '@playwright/test'
import { BasePage } from '../pages/BasePage'
import { LoginPage } from '../pages/LoginPage'

test('Login Cases - Validate successful Login',async ({page}) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);

    await basePage.openApplication();
    await loginPage.validate_unsuccessful_login_error_message('Adminn', 'charu')
    await page.waitForTimeout(8000)
    
    await loginPage.validate_successful_login('Admin', 'admin123');
    
})