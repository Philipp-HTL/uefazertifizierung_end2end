var hierarchySelectCommands = {
    expectElementsVisible: function () {
        console.log("Expect All Page Elements To Be Visible");
        this.section.certification_periods.assert.visible;
        this.section.certification_periods.expect.element('@first_period').to.be.visible;
        
    },
    selectCertPeriod: function() {
        console.log("Select Certification Period");
        this.section.certification_periods.click('@first_period');
    },
    editHierarchy: function () {
        console.log("Edit Hierarchy");
        this.expect.element('@edit_hierarchy_button').to.be.visible;
        this.click('@edit_hierarchy_button');
    },
    createHierarchy: function () {
        console.log("Create Hierarchy");
        this.expect.element('@create_hierarchy_button').to.be.visible;
        this.click('@create_hierarchy_button');
    }
}

module.exports = {
    commands: [hierarchySelectCommands],
    url: 'http://localhost:8080/hierarchyselect',
    sections: {
        certification_periods: {
            selector: '#app > div > main > div > div:nth-child(1) > div',
            elements: {
                first_period: {
                    selector: '#app > div > main > div > div:nth-child(1) > div > div.v-item-group.theme--light.v-list-item-group > div:nth-child(1)'
                }
            }
        }
       
    },
    elements: {
        edit_hierarchy_button: {
            selector: '#app > div > main > div > div:nth-child(1) > button:nth-child(2)'
        },
        create_hierarchy_button: {
            selector: '#app > div > main > div > div:nth-child(1) > button:nth-child(3)'
        }
    }

}

