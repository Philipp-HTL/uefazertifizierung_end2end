var hierarchyAdminCommands = {
    expectElementsVisible: function () {
        console.log("Expect All Page Elements To Be Visible");
        this.section.level.assert.visible;
        this.section.level.expect.element('@text').to.be.visible;
        this.section.level.expect.element('@edit_button').to.be.visible;
        this.section.level.expect.element('@delete_button').to.be.visible;
        this.section.level.expect.element('@add_button').to.be.visible;
        
        this.expect.element('@cancel_editing_button').to.be.visible;
    },
    editElement: function () {
        console.log("Edit Element");
        this.section.level.click('@edit_button');
        
        this.section.level.expect.element('@edit_input_field').to.be.visible;
        this.section.level.setValue('@edit_input_field', 'test');
        this.section.level.expect.element('@save_edit_button').to.be.visible;
        this.section.level.click('@save_edit_button');

        this.section.level.expect.element('@text').text.to.equal('test');
    },
    deleteElement: function () {
        console.log("Delete Element");
        this.section.level.click('@delete_button');
    },
    addElement: function () {
        this.section.level.click('@add_button');
        this.setValue('@create_input_field', 'test');
        this.click('@create_new_element_button');
    },
    saveNewHierarchy: function () {
        this.click('@create_hierarchy_button');
        this.setValue('@create_period_input_field', 'test zertifizierungsperiode');
        this.click('@create_new_hierarchy_button');
    }
}

module.exports = {
    commands: [hierarchyAdminCommands],
    url: 'http://localhost:8080/hierarchyadmin',
    sections: {
        level: {
            selector: '#app > div > main > div > div:nth-child(1) > div:nth-child(3) > div.v-list-item.theme--light',
            elements: {
                text: {
                    selector: '#app > div > main > div > div:nth-child(1) > div:nth-child(3) > div.v-list-item.theme--light > div > div > div > div.col.col-8 > div > span'
                },
                edit_input_field: {
                    selector: '#editingArea'
                },
                edit_button: {
                    selector: '#app > div > main > div > div:nth-child(1) > div:nth-child(3) > div.v-list-item.theme--light > div > div > div > div.col.col-4 > div > div > button.mx-2.v-btn.v-btn--contained.v-btn--fab.v-btn--round.theme--light.v-size--default.blue'
                },
                delete_button: {
                    selector: '#app > div > main > div > div:nth-child(1) > div:nth-child(3) > div.v-list-item.theme--light > div > div > div > div.col.col-4 > div > div > button.mx-2.v-btn.v-btn--contained.v-btn--fab.v-btn--round.theme--light.v-size--default.red'
                },
                add_button: {
                    selector: '#app > div > main > div > div:nth-child(1) > div:nth-child(3) > div.v-list-item.theme--light > div > div > div > div.col.col-4 > div > div > div > button'
                },
                save_edit_button: {
                    selector: '#app > div > main > div > div:nth-child(1) > div:nth-child(3) > div.v-list-item.theme--light > div > div > div > div.col.col-4 > div > div > button.mx-2.v-btn.v-btn--contained.v-btn--fab.v-btn--round.theme--light.v-size--default.green'
                }
            }
        },

    },
    elements: {
        cancel_editing_button: {
            selector: '#app > div > main > div > div:nth-child(1) > button.mx-2.v-btn.v-btn--contained.theme--light.v-size--default.primary'
        },
        save_hierarchy_button: {
            selector: '#app > div > main > div > div:nth-child(1) > button:nth-child(5)'
        },
        create_hierarchy_button: {
            selector: '#app > div > main > div > div:nth-child(1) > button.v-btn.v-btn--contained.theme--dark.v-size--default.primary'
        },
        create_input_field: {
            selector: '#createElementInput'
        },
        create_new_element_button: {
            selector: '#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button:nth-child(2)'
        },
        create_period_input_field: {
            selector: '#createNewHierarchyInput'
        },
        create_new_hierarchy_button: {
            selector: '#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button:nth-child(2)'
        }
    }

}