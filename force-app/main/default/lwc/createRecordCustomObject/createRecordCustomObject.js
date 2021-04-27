import { LightningElement,api,track } from 'lwc';
import submitRecord from '@salesforce/apex/CustomRecordLWC.submitRecord';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class CreateRecordCustomObject extends LightningElement {

    @track scoreObjName;
    @track scoreRecoreId;
    @track errorMsg;

    scoreHandleChange(e){
        if(e.target.name=='scoreName'){
            this.scoreObjName=e.target.value;
        }
    }

    submitAction(){
        submitRecord({cardName:this.scoreObjName})
        .then(result=>{
            this.scoreRecordId = result.Id;
            window.console.log('scoreRecoreId##Vijay2 ' + this.scoreRecordId);       
            const toastEvent = new ShowToastEvent({
                title:'Success!',
                message:'Record created successfully',
                variant:'success'
              });
              this.dispatchEvent(toastEvent);
    
            
    
        })
        .catch(error =>{
           this.errorMsg=error.message;
           window.console.log(this.error);
           this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating record',
                message: this.errorMsg,
                variant: 'error'
            })
        );
        });
    }
}