import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { breedReducer } from './shared/store/breed/breed.reducer';
import { BreedEffect } from './shared/store/breed/breed.effect';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectComponent } from './select/select.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { LimitSelectComponent } from './limit-select/limit-select.component';
import { ApiService } from './shared/api.service';
import { reducer } from './shared/store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectComponent,
    CardComponent,
    CardListComponent,
    LimitSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('breedslist', breedReducer),
    StoreModule.forFeature('getstate', reducer),
    EffectsModule.forFeature([BreedEffect])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
