var loginCommands = {
    signIn: function () {
        this.waitForElementVisible('@inputScreen');
        this.setValue('@username', 'test');
        this.setValue('@password', 'test');
        this.click('@loginButton');
    }
}

module.exports = {
    commands: [loginCommands],
    url: 'http://localhost:8080/',

    elements: {
        inputScreen: {
            selector: '#app > div > main > div > div.mx-auto.mt-9.v-card.v-sheet.theme--light.blue'
        },
        username: {
            selector: '#input-5'
        },
        password: {
            selector: '#input-9'
        },
        loginButton: {
            selector: '#app > div > main > div > div.mx-auto.mt-9.v-card.v-sheet.theme--light.blue > div.v-card__actions > button'
        }
    }
}

