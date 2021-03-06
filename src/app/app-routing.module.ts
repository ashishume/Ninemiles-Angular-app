import { PaymentComponent } from './payment/payment.component';
import { AdminGuard } from './shared/guard/admin/admin.guard';
import { MarksSheetComponent } from './marks-sheet/marks-sheet.component';
import { AuthGuard } from './shared/guard/auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultsComponent } from './results/results.component';
import { TeacherGuard } from './shared/guard/teacher/teacher.guard';
import { ProgressComponent } from './progress/progress.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { TestProgressComponent } from './test-progress/test-progress.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'results', component: ResultsComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'progress', component: ProgressComponent, canActivate: [AuthGuard] },
  {
    path: 'payment-success/:id',
    component: PaymentSuccessComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'marks-sheet',
    component: MarksSheetComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'section',
    loadChildren: () =>
      import('./section/section.module').then((m) => m.SectionModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-panel',
    loadChildren: () =>
      import('./admin-panel/admin-panel.module').then(
        (m) => m.AdminPanelModule
      ),
    canActivate: [AdminGuard],
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./teacher/teacher.module').then((m) => m.TeacherModule),
    canActivate: [TeacherGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'test-progress', component: TestProgressComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
