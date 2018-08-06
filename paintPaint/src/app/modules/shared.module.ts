import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
        FormsModule
    ],
    exports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
        FormsModule
    ],
    providers: []
})
export class SharedModule { }