import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PostsComponent } from './bloge/posts/posts.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PostsComponent,
      },

      {
        path: 'login',
        component: AuthComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    PostsComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
