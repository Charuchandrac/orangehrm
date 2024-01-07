import { Locator, Page, expect } from "@playwright/test";

export class DashboardPage{
    dashboardPage: Page;
    dashboard_TitleText: Locator;
    


    constructor(dashboardPage: Page){
        this.dashboardPage = dashboardPage;
        this.dashboard_TitleText = dashboardPage.locator('//h6[text()="Dashboard"]');

    }

    async validatePageTitle(value: string){
        const dashboard_title = await this.dashboard_TitleText.textContent();
        expect(dashboard_title).toContain(value);
        await expect(this.dashboard_TitleText).toHaveText(value);
    }

    async clickItem_LHMenu(){
        //a[.='PIM']
    }


}