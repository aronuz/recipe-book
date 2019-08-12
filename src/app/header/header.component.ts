import { Component} from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header', 
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    constructor(private dataStorageServeice: DataStorageService){}

    onSaveData(){
        this.dataStorageServeice.storeRecipes();
    }

    onFetchData(){
        this.dataStorageServeice.fetchRecipes().subscribe();
    }
       

}