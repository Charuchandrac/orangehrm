import {test, expect} from '@playwright/test'
import { BasePage } from '../pages/BasePage'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { MenuPage } from '../pages/MenuPage'


test('Validate PIM Cases',async ({page}) => {
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const menuPage = new MenuPage(page);

    await basePage.openApplication();
    await loginPage.validate_successful_login('Admin', 'admin123');
    await dashboardPage.validatePageTitle('Dashboard');

    await menuPage.clickPIMMenuItem();
    await page.waitForTimeout(5000);


})