import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';



import { AppComponent } from './app.component';

import { CalendarModule } from 'angular-calendar';

import { ChartsModule } from 'ng2-charts';


import { ChartsComponent } from './component/charts/charts.component';
import { ChatComponent } from './component/chat/chat.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';

import {CovalentLayoutModule} from '@covalent/core';
import {CovalentSearchModule} from '@covalent/core';
import {CovalentMediaModule} from '@covalent/core';
import {CovalentMenuModule} from '@covalent/core';
import {CovalentHttpModule} from '@covalent/http';
import { CovalentCommonModule } from '@covalent/core';

import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';


import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';

import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';
import { TasksComponent, TasksDialog } from './component/tasks/tasks.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { LoginComponent } from './component/login/login.component';
import { MedicationsComponent } from './component/medications/medications.component';
import { SummaryComponent } from './component/summary/summary.component';
import { CalendarUtilsComponent } from './component/calendar-utils/calendar-utils.component';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from './component/calendar-utils/module';
import { PaymentComponent } from './component/payment/payment.component';
import { LungsComponent } from './component/system-review/lungs/lungs.component';
import { KneeComponent } from './component/system-review/knee/knee.component';
import { KidneysComponent } from './component/system-review/kidneys/kidneys.component';
import { StomachComponent } from './component/system-review/stomach/stomach.component';
import { XRayComponent } from './component/system-review/x-ray/x-ray.component';
import { HeartComponent } from './component/system-review/heart/heart.component';
import { BrainComponent } from './component/system-review/brain/brain.component';
import { NewBrainComponent } from './component/system-review/brain/new-brain.component';
import { NewKidneysComponent } from './component/system-review/kidneys/new-kidneys.component';
import { NewLungsComponent } from './component/system-review/lungs/new-lungs.component';
import { NewKneeComponent } from './component/system-review/knee/new-knee.component';
import { NewHeartComponent } from './component/system-review/heart/new-heart.component';
import { NewStomachComponent } from './component/system-review/stomach/new-stomach.component';
import { NewXRayComponent } from './component/system-review/x-ray/new-x-ray.component';
import { NewTaskComponent } from './component/tasks/new-task.component';
import { PatientsComponent } from './component/patients/patients.component';
import { ImmunizationsComponent } from './component/immunizations/immunizations.component';
import { NewImmunizationsComponent } from './component/immunizations/new-immunizations.component';
import { FamilyHistoryComponent } from './component/family-history/family-history.component';
import { SocialHistoryComponent } from './component/social-history/social-history.component';
import { SurgicalHistoryComponent } from './component/surgical-history/surgical-history.component';
import { PhysicalExamComponent } from './component/physical-exam/physical-exam.component';
import { GeneralAppearanceComponent } from './component/physical-exam/general-appearance/general-appearance.component';
import { SkinComponent } from './component/physical-exam/skin/skin.component';
import { HeadComponent } from './component/physical-exam/head/head.component';
import { EarsComponent } from './component/physical-exam/ears/ears.component';
import { EyesComponent } from './component/physical-exam/eyes/eyes.component';
import { NoseComponent } from './component/physical-exam/nose/nose.component';
import { ThroatComponent } from './component/physical-exam/throat/throat.component';
import { NeckComponent } from './component/physical-exam/neck/neck.component';
import { NodesComponent } from './component/physical-exam/nodes/nodes.component';
import { CvComponent } from './component/physical-exam/cv/cv.component';
import { BreastsComponent } from './component/physical-exam/breasts/breasts.component';
import { ChestComponent } from './component/physical-exam/chest/chest.component';
import { AbdomenComponent } from './component/physical-exam/abdomen/abdomen.component';
import { BackSpineComponent } from './component/physical-exam/back-spine/back-spine.component';
import { ExtremetiesComponent } from './component/physical-exam/extremeties/extremeties.component';
import { GenetaliaComponent } from './component/physical-exam/genetalia/genetalia.component';
import { RectalComponent } from './component/physical-exam/rectal/rectal.component';
import { NeurologicComponent } from './component/physical-exam/neurologic/neurologic.component';
import { CnComponent } from './component/physical-exam/cn/cn.component';
import { MotorComponent } from './component/physical-exam/motor/motor.component';
import { GaitComponent } from './component/physical-exam/gait/gait.component';
import { SpacicityComponent } from './component/physical-exam/spacicity/spacicity.component';
import { BulkComponent } from './component/physical-exam/bulk/bulk.component';
import { NewFamilyHistoryComponent } from './component/family-history/new-family-history.component';
import { NewSocialHistoryComponent } from './component/social-history/new-social-history.component';
import { NewSurgicalHistoryComponent } from './component/surgical-history/new-surgical-history.component';
import { NewSystemReviewComponent } from './component/system-review/new-system-review.component';
import { NewPhysicalExamComponent } from './component/physical-exam/new-physical-exam.component';


import { PhysicalExamService } from './services/physical-exam/physical-exam.service';
import { SystemReviewService} from './services/system-review/system-review.service';
import { SymptomsService} from './services/symptoms/symptoms.service';

import { DiagnosesService } from './services/diagnoses/diagnoses.service';

import { MedicalHistoryService } from './services/medical-history/medical-history.service';
import { SocialHistoryService } from './services/social-history/social-history.service';
import { FamilyHistoryService } from './services/family-history/family-history.service';

import { VitalsService} from './services/vitals/vitals.service';

import { AppointmentsService } from './services/appointments/appointments.service';
import { TasksService} from './services/appointments/tasks.service';

import { ListService } from './services/patient/list.service';
import { DetailService } from './services/patient/detail.service';

import { LoginService} from './services/authentication/login.service';
import { RegisterService} from './services/authentication/register.service';
import { SystemReviewComponent } from './component/system-review/system-review.component';
import { HospitalRegistrationComponent } from './component/registration/hospital-registration/hospital-registration.component';
import { PatientRegistrationComponent } from './component/registration/patient-registration/patient-registration.component';
import { PhysicianRegistrationComponent } from './component/registration/physician-registration/physician-registration.component';
import { NurseRegistrationComponent } from './component/registration/nurse-registration/nurse-registration.component';
import { DifferentialDiagnosesComponent } from './component/diagnoses/differential-diagnoses.component';
import { DiagnosesComponent, DialogOverviewExampleDialog } from './component/diagnoses/diagnoses.component';
import { CurrentMedicationsComponent } from './component/medications/current-medications/current-medications.component';
import { NewCurrentMedicationsComponent } from './component/medications/new-current-medications/new-current-medications.component';
import { NewDiagnosesComponent } from './component/diagnoses/new-diagnoses/new-diagnoses.component';
import { PatientBioComponent } from './component/patients/patient-bio/patient-bio.component';
import { AssessmentsComponent } from './component/assessments/assessments.component';
import { HpiComponent } from './component/hpi/hpi.component';






@NgModule({
  declarations: [
    AppComponent,

    ChartsComponent,
    ChatComponent,
    HomeComponent,
    NavBarComponent,
    SideBarComponent,
    TasksComponent,
    AppointmentComponent,
    MedicationsComponent,
    SummaryComponent,
    LoginComponent,
    CalendarUtilsComponent,
    PaymentComponent,
    LungsComponent,
    KneeComponent,
    KidneysComponent,
    StomachComponent,
    XRayComponent,
    HeartComponent,
    BrainComponent,
    NewBrainComponent,
    NewKidneysComponent,
    NewLungsComponent,
    NewKneeComponent,
    NewHeartComponent,
    NewStomachComponent,
    NewXRayComponent,
    NewTaskComponent,
    PatientsComponent,
    ImmunizationsComponent,
    NewImmunizationsComponent,
    FamilyHistoryComponent,
    SocialHistoryComponent,
    SurgicalHistoryComponent,
    PhysicalExamComponent,
    GeneralAppearanceComponent,
    SkinComponent,
    HeadComponent,
    EarsComponent,
    EyesComponent,
    NoseComponent,
    ThroatComponent,
    NeckComponent,
    NodesComponent,
    CvComponent,
    BreastsComponent,
    ChestComponent,
    AbdomenComponent,
    BackSpineComponent,
    ExtremetiesComponent,
    GenetaliaComponent,
    RectalComponent,
    NeurologicComponent,
    CnComponent,
    MotorComponent,
    GaitComponent,
    SpacicityComponent,
    BulkComponent,
    NewFamilyHistoryComponent,
    NewSocialHistoryComponent,
    NewSurgicalHistoryComponent,
    NewSystemReviewComponent,
    NewPhysicalExamComponent,
    SystemReviewComponent,
    HospitalRegistrationComponent,
    PatientRegistrationComponent,
    PhysicianRegistrationComponent,
    NurseRegistrationComponent,
    DifferentialDiagnosesComponent,
    DiagnosesComponent,
    DialogOverviewExampleDialog,
    CurrentMedicationsComponent,
    NewCurrentMedicationsComponent,
    NewDiagnosesComponent,
    PatientBioComponent,
    AssessmentsComponent,
    HpiComponent,
    TasksDialog,


  ],
  imports: [
    BrowserModule,

    CalendarModule.forRoot(),

    ChartsModule,

    DemoUtilsModule,

    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    CovalentLayoutModule,
    CovalentSearchModule,
    CovalentMediaModule,
    CovalentMenuModule,
    CovalentCommonModule,
    CovalentHttpModule.forRoot(),

    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,

    MatButtonToggleModule,
    MatAutocompleteModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatTabsModule,
    MatTooltipModule,

    NgbModule.forRoot(),

    routing,

    NoopAnimationsModule

  ],

  entryComponents: [DiagnosesComponent, DialogOverviewExampleDialog, TasksDialog, TasksComponent],

  providers: [
    PhysicalExamService,
    SystemReviewService,
    SymptomsService,
    FamilyHistoryService,
    SocialHistoryService,
    MedicalHistoryService,
    AppointmentsService,
    LoginService,
    RegisterService,
    VitalsService,
    DetailService,
    ListService,
    DiagnosesService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
