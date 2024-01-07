import { Locator, Page } from "@playwright/test";

export class MenuPage{
    menuPage: Page;
    dashboard_Menu: Locator;
    pim_Menu: Locator;

    constructor(menuPage: Page){
        this.menuPage = menuPage;
        this.dashboard_Menu = menuPage.locator('')
        this.pim_Menu = menuPage.locator('//a[.="PIM"]')

    }

    async clickPIMMenuItem() {
        await this.pim_Menu.click();
    }


}