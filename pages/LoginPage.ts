import { Page, Locator, expect } from "@playwright/test";

export class LoginPage{
    loginPage: Page;
    userNameTxtbox: Locator;
    passwordTxtbox: Locator;
    loginBtn: Locator;
    forgotPasswordLink: Locator;
    validationMessage_InvalidCredentials: Locator;

    constructor(loginPage: Page){
        this.loginPage = loginPage;
        this.userNameTxtbox = loginPage.getByPlaceholder('Username');
        // this.userNameTxtbox = loginPage.locator('//input[@name="username"]');
        this.passwordTxtbox = loginPage.getByPlaceholder('Password');
        // this.passwordTxtbox = loginPage.locator('//input[@name="password"]');
        this.loginBtn = loginPage.getByRole('button', {name: 'Login'});
        this.validationMessage_InvalidCredentials = loginPage.locator('p.oxd-text.oxd-text--p.oxd-alert-content-text');
    }

    async validate_successful_login(username: string, password: string){
        await this.userNameTxtbox.fill(username);
        await this.passwordTxtbox.fill(password);
        await this.loginBtn.click();
        
    }

    async validate_unsuccessful_login_error_message(username: string, password: string){
        await this.userNameTxtbox.fill(username);
        await this.passwordTxtbox.fill(password);
        await this.loginBtn.click();
        expect(await this.validationMessage_InvalidCredentials.textContent()).toContain('Invalid credentials')
    }
}