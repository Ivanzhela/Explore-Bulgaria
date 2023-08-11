import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { RouterModule } from '@angular/router';
import { FormValidationDirective } from './form-validation.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormInputComponent } from './login-register/form-input/form-input.component';
import { userInterceptorProvider } from './user.interceptor';
import { CoreModule } from 'src/app/core/core.module';
import { NoAuthGuard } from 'src/app/guards/no-auth.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProfileInformationComponent } from './profile/profile-information/profile-information.component';
import { ProfileSettingsComponent } from './profile/profile-settings/profile-settings.component';
import { ProfileInformationSelectedCategoryComponent } from './profile/profile-information/profile-information-selected-category/profile-information-selected-category.component';
import { SelectedCategoryItemComponent } from './profile/profile-information/profile-information-selected-category/selected-category-item/selected-category-item.component';
import { SelectedCategoryItemDetailsComponent } from './profile/profile-information/profile-information-selected-category/selected-category-item/selected-category-item-details/selected-category-item-details.component';
import { DestinationModule } from '../destination/destination.module';

@NgModule({
  declarations: [
    LoginRegisterComponent,
    FormValidationDirective,
    ProfileComponent,
    FormInputComponent,
    ProfileInformationComponent,
    ProfileSettingsComponent,
    ProfileInformationSelectedCategoryComponent,
    SelectedCategoryItemComponent,
    SelectedCategoryItemDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'auth',
        component: LoginRegisterComponent,
        canActivate: [NoAuthGuard],
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile/destination/:name/:id',
        component: SelectedCategoryItemDetailsComponent,
        canActivate: [AuthGuard],
      },
    ]),
    SharedModule,
    CoreModule,
    DestinationModule,
  ],
  providers: [userInterceptorProvider],
  exports: [LoginRegisterComponent],
})
export class UserModule {}
