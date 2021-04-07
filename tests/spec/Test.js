
describe('Test functionality of Components', function() {
    before(function(browser) {
        browser.url(browser.launchUrl);
        this.login = browser.page.login();
        this.overview = browser.page.overview();
        this.hierarchyadmin = browser.page.hierarchyadmin();
        this.hierarchyselect = browser.page.hierarchyselect();
        this.login.signIn();
    });

    test('Overview', (browser) => {
        this.overview.selectComponent();
        this.overview.editComponent(browser);
    })

    test('Edit Hierarchy', (browser) => {
        this.hierarchyselect.navigate();
        this.login.signIn();

        this.hierarchyselect.expectElementsVisible();
        this.hierarchyselect.selectCertPeriod();
        this.hierarchyselect.editHierarchy();

        browser.expect.url().to.contain('hierarchyadmin');

        this.hierarchyadmin.expectElementsVisible();
        this.hierarchyadmin.editElement();
        this.hierarchyadmin.addElement();
        this.hierarchyadmin.deleteElement();
    })

    test('Create Hierarchy', (browser) => {
        this.hierarchyselect.navigate();
        this.login.signIn();

        this.hierarchyselect.expectElementsVisible();
        this.hierarchyselect.selectCertPeriod();
        this.hierarchyselect.createHierarchy();

        browser.expect.url().to.contain('hierarchyadmin');

        this.hierarchyadmin.expectElementsVisible();
        this.hierarchyadmin.saveNewHierarchy();
    })
})