import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MotionService } from './motion.service'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
