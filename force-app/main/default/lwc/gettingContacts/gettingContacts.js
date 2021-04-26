import { LightningElement ,api,wire} from 'lwc';
import {getFieldValue, getRecord} from 'lightning/uiRecordApi';
//import  ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import  NAME_FIELD from '@salesforce/schema/Contact.Name';
import  TITLE_FIELD from '@salesforce/schema/Contact.Title';
import  PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import  EMAIL_FIELD from '@salesforce/schema/Contact.Email';
const fields=[NAME_FIELD,TITLE_FIELD,PHONE_FIELD,EMAIL_FIELD];
export default class GettingContacts extends LightningElement {
    @api recordId;
    // @api objectApiName;

    
    
    @wire(getRecord,{recordId:'$recordId',fields}) contact;

    get name(){
        return getFieldValue(this.contact.data,NAME_FIELD);

    }

    get title(){
        return getFieldValue(this.contact.data,TITLE_FIELD);
    }

    get phone(){
        return getFieldValue(this.contact.data,PHONE_FIELD);
    }

    get email(){
        return getFieldValue(this.contact.data,EMAIL_FIELD);
    }



}