import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AccountService } from "./account.service";
import { AccountComponent } from "./account/account.component";
import { AppComponent } from "./app.component";
import { LoggingService } from "./logging.service";
import { NewAccountComponent } from "./new-account/new-account.component";

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
