import { Component } from "@angular/core";
import { AccountService } from "../account.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [LoggingService, AccountService],
})
export class AccountComponent {
  constructor(
    private logginService: LoggingService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    this.logginService.logStatusChange(status);
  }
}
