import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';

import PRICE_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';


export default class FirstCustomComponent extends LightningElement {
    accountId;

    name = '';

    handleNameChange(event) {
        this.accountId = undefined;
        this.name = event.target.value;
    }

    createEntry() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        const recordInput = { apiName: PRICE_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then((account) => {
                this.accountId = account.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Entry created',
                        variant: 'success'
                    })
                );
            })
            .catch((error) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: 'Error creating record',
                        variant: 'error'
                    })
                );
            });
    }
}