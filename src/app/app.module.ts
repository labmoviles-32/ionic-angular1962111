import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { IonicModule } from '@ionic/angular';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
=======
    AppComponent
>>>>>>> 86604eb01d99ad3546f9dfad6c665567b2e11e6f
    AlumnosComponent,
TestComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
=======
    AppRoutingModule
>>>>>>> 86604eb01d99ad3546f9dfad6c665567b2e11e6f
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
