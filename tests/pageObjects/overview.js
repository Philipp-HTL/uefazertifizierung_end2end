var overviewCommands = {
    expectElementsVisible: function () {
        console.log("Expect All Page Elements To Be Visible");
        this.section.hierarchy.assert.visible;
        this.section.hierarchy.expect.element('@first_level').to.be.visible;
        this.section.hierarchy.expect.element('@first_sub_level').to.be.visible;
        this.section.hierarchy.expect.element('@first_component').to.be.visible;
        
        this.expect.element('@component_preview').to.be.visible;
        this.expect.element('@generate_pdf_button').to.be.visible;
        this.expect.element('@edit_component_button').to.be.visible;
    },
    editComponent: function (browser) {
        console.log("Edit Component");
        this.click('@edit_component_button');
        browser.expect.url().to.contain('editoruser');
    },
    selectComponent: function() {
        console.log("Select Component");
        this.section.hierarchy.click('@show_sublvl_button');
        this.section.hierarchy.click('@show_comp_button');
        this.section.hierarchy.click('@first_component');

        this.expectElementsVisible();
    }
}

module.exports = {
    commands: [overviewCommands],
    sections: {
        hierarchy: {
            selector: '#app > div > main > div > div:nth-child(1) > div > div:nth-child(1)',
            elements: {
                first_level: {
                    selector: '#app > div > main > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div.v-list-item.theme--light'
                },
                first_sub_level: {
                    selector: '#app > div > main > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div.v-list-group.v-list-group--active.primary--text > div.v-list-group__items > div:nth-child(1) > div:nth-child(2) > div > div.v-list-item.theme--light'
                },
                first_component: {
                    selector: '#app > div > main > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div.v-list-group.v-list-group--active.primary--text > div.v-list-group__items > div:nth-child(1) > div:nth-child(2) > div > div.v-list-group.v-list-group--active.primary--text > div.v-list-group__items > div:nth-child(1) > div:nth-child(2) > div > div > div > div > div > div.col.col-8 > div > span'
                },
                show_sublvl_button: {
                    selector: '#app > div > main > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div.v-list-group > div.v-list-group__header.v-list-item.v-list-item--link.theme--light'
                },
                show_comp_button: {
                    selector: '#app > div > main > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div.v-list-group.v-list-group--active.primary--text > div.v-list-group__items > div:nth-child(1) > div:nth-child(2) > div > div.v-list-group > div.v-list-group__header.v-list-item.v-list-item--link.theme--light'
                }
            }
        }

    },
    elements: {
        component_preview: {
            selector: '#app > div > main > div > div:nth-child(1) > div > div:nth-child(2) > div'
        },
        edit_component_button: {
            selector: '#app > div > main > div > div:nth-child(1) > div > div:nth-child(2) > button.mx-2.v-btn.v-btn--contained.theme--light.v-size--default.primary'
        },
        generate_pdf_button: {
            selector: '#app > div > main > div > div:nth-child(1) > div > div:nth-child(2) > button.v-btn.v-btn--contained.theme--light.v-size--default.primary'
        }
    }

}