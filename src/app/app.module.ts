import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AppRoutingModule} from './shared/routing/app-routing.module';
import { AuthService } from './shared/services/auth.service';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( {
      apiKey: 'AIzaSyARBIlQ9KvyTc7CCttkRmbPajpZUhhns38',
      authDomain: 'angular-authentication-d1ce3.firebaseapp.com',
      databaseURL: 'https://angular-authentication-d1ce3.firebaseio.com',
      projectId: 'angular-authentication-d1ce3',
      storageBucket: 'angular-authentication-d1ce3.appspot.com',
      messagingSenderId: '221024582180',
      appId: '1:221024582180:web:03741520d742b28bbab6b1',
      measurementId: 'G-B6M82G0TYR'
    }
    ),
    AppRoutingModule,
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
