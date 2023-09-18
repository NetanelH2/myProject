import {test} from '@playwright/test'

test.describe("I'm a test suite", () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://devexpress.github.io/testcafe/example/')
    })
    test("I'm a test case inside a test suite", async ({page}) => {})
    test('Before Sign-up - User can choose between logging or registering', async ({
        page,
    }) => {})
    test('Sign-Up Screen - Full Name, Email, and Password are mandatories fields', async ({
        page,
    }) => {})
})
