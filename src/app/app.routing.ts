import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppointmentComponent } from './component/appointment/appointment.component';
import { ChartsComponent } from './component/charts/charts.component';
import { ChatComponent } from './component/chat/chat.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MedicationsComponent } from './component/medications/medications.component';
import { SummaryComponent } from './component/summary/summary.component';
import { TasksComponent } from './component/tasks/tasks.component';
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
import { PatientsComponent } from './component/patients/patients.component';

import { HospitalRegistrationComponent } from './component/registration/hospital-registration/hospital-registration.component';
import { PatientRegistrationComponent } from './component/registration/patient-registration/patient-registration.component';
import { PhysicianRegistrationComponent } from './component/registration/physician-registration/physician-registration.component';
import { NurseRegistrationComponent } from './component/registration/nurse-registration/nurse-registration.component';

import { AssessmentsComponent } from './component/assessments/assessments.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/summary',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'hospital_registration',
    component: HospitalRegistrationComponent,
  },

  {
    path: 'patient_registration',
    component: PatientRegistrationComponent,
  },

  {
    path: 'nurse_registration',
    component: NurseRegistrationComponent,
  },

  {
    path: 'physician_registration',
    component: PhysicianRegistrationComponent,
  },

  {
    path: 'payment',
    component: PaymentComponent,
  },

  {
    path: 'patients',
    component: PatientsComponent,
  },

  {
    path: 'charts',
    component: ChartsComponent,
  },

  {
    path: 'chat',
    component: ChatComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'medications',
    component: MedicationsComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  },

  {
    path: 'lungs',
    component: LungsComponent,
  },

  {
    path: 'knee',
    component: KneeComponent,
  },

  {
    path: 'kidneys',
    component: KidneysComponent,
  },

  {
    path: 'stomach',
    component: StomachComponent,
  },

  {
    path: 'x_ray',
    component: XRayComponent,
  },

  {
    path: 'heart',
    component: HeartComponent,
  },

  {
    path: 'brain',
    component: BrainComponent,
  },
  {
    path: 'new_brain',
    component: NewBrainComponent,
  },
  {
    path: 'new_kidneys',
    component: NewKidneysComponent,
  },
  {
    path: 'assessment',
    component: AssessmentsComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
