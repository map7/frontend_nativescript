import { AppiumDriver, createDriver, SearchOptions, nsCapabilities } from "nativescript-dev-appium";
import { assert } from "chai";

const addContext = require('mochawesome/addContext');

describe("Login Screens", () => {
    let driver: AppiumDriver;

    before(async function(){
        nsCapabilities.testReporter.context = this; 
        driver = await createDriver();
    });

    after(async function () {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("should show login page", async function () {
        // Enter user
        const nameField = await driver.findElementByAccessibilityId("email");
        await nameField.sendKeys("testuser@pais.com.au");

        // Enter password
        const passwordField = await driver.findElementByAccessibilityId("password");
        await passwordField.sendKeys("password");
        
        // Check heading
        const lblHeading = await driver.findElementByAccessibilityId("heading");
        assert.equal(await lblHeading.text(), "Login");
    });

    it("ends up on 'sign up' screen after tapping Sign Up", async function () {
        // Login
        const btnSignUpTap = await driver.findElementByAccessibilityId("btnSignUp");
        await btnSignUpTap.click();
        
        // Check heading
        const lblHeading = await driver.findElementByAccessibilityId("heading");
        assert.equal(await lblHeading.text(), "Sign Up");

        // Login
        const btnLoginNavTap = await driver.findElementByAccessibilityId("btnLogin");
        await btnLoginNavTap.click();
    }); 

    describe("After login", () => {

        beforeEach(async function () {
            // Login
            const btnLoginTap = await driver.findElementByAccessibilityId("btnLogin");
            await btnLoginTap.click();
        });
        
        afterEach(async function () {
            // Nav to Login
            const btnLoginNavTap = await driver.findElementByAccessibilityId("btnLogin");
            await btnLoginNavTap.click();
        });
        
        it("ends up on 'home' screen after login", async function () {
            // Check heading
            const lblHeading = await driver.findElementByAccessibilityId("heading");
            assert.equal(await lblHeading.text(), "Home");
        }); 

        it("ends up on 'manual' screen after clicking 'manual button'", async function () {
            // Nav to Manual
            const btnManualNavTap = await driver.findElementByAccessibilityId("btnManual");
            await btnManualNavTap.click();

            // Check heading
            const lblHeading = await driver.findElementByAccessibilityId("heading");
            assert.equal(await lblHeading.text(), "Manual");
        }); 

        it("ends up on 'feedback' screen after clicking 'feedback button'", async function () {
            // Nav to Feedback
            const btnFeedbackNavTap = await driver.findElementByAccessibilityId("btnFeedback");
            await btnFeedbackNavTap.click();

            // Check heading
            const lblHeading = await driver.findElementByAccessibilityId("heading");
            assert.equal(await lblHeading.text(), "Feedback");
        }); 

        it("ends up on 'settings' screen after clicking 'settings button'", async function () {
            // Nav to Settings
            const btnSettingsNavTap = await driver.findElementByAccessibilityId("btnSettings");
            await btnSettingsNavTap.click();

            // Check heading
            const lblHeading = await driver.findElementByAccessibilityId("heading");
            assert.equal(await lblHeading.text(), "Settings");
        }); 
        
    });

    // it("should find an element by text", async function () {
    //     const btnTap = await driver.findElementByAutomationText("TAP");
    //     await btnTap.click();

    //     const message = " taps left";
    //     const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
    //     assert.equal(await lblMessage.text(), "41" + message);

    //     // Image verification
    //     // const screen = await driver.compareScreen("hello-world-41");
    //     // assert.isTrue(screen);
    // });

    // it("should find an element by type", async function () {
    //     const btnTap = await driver.findElementByClassName(driver.locators.button);
    //     await btnTap.click();

    //     const message = " taps left";
    //     const lblMessage = await driver.findElementByText(message, SearchOptions.contains);
    //     assert.equal(await lblMessage.text(), "40" + message);
    // });
});
