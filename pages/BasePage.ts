import { Page, Locator } from '@playwright/test'

export class BasePage{
    basePage: Page;

    constructor(basePage: Page){
        this.basePage = basePage;
    }

    async openApplication(){
        await this.basePage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
    }
}