import { LightningElement } from 'lwc';

export default class ButtonGroup extends LightningElement {
    
    count = 0;

    counterUp() {
        this.count++;
    }

    counterDown() {
        this.count--;
    }

}