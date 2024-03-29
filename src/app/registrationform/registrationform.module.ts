import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationformComponent } from './containers/registrationform/registrationform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';
import { AddressinformationComponent } from './addressinformation/addressinformation.component';
import { EmploymentinformationComponent } from './employmentinformation/employmentinformation.component';
import { EducationinformationComponent } from './educationinformation/educationinformation.component';
import { RelationshipinformationComponent } from './relationshipinformation/relationshipinformation.component';
import { SkillinformationComponent } from './skillinformation/skillinformation.component';
import { FormviewerComponent } from './formviewer/formviewer.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationformService } from './containers/registrationform/registrationform.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    RegistrationformComponent,
    PersonalinformationComponent,
    AddressinformationComponent,
    EmploymentinformationComponent,
    EducationinformationComponent,
    RelationshipinformationComponent,
    SkillinformationComponent,
    FormviewerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports:[
    RegistrationformComponent,
    AddressinformationComponent,
    PersonalinformationComponent,
    EducationinformationComponent,
    EmploymentinformationComponent,
    RelationshipinformationComponent,
    SkillinformationComponent,
    FormviewerComponent
  ],
  providers:[
    RegistrationformService
  ]
})
export class RegistrationformModule { }
