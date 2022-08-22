import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorMsgDirective } from "./directives/error-msg.directive";
import { MyCustomIfDirective } from "./directives/my-custom-if.directive";

@NgModule({
  declarations: [ErrorMsgDirective, MyCustomIfDirective],
  imports: [CommonModule],
  exports: [ErrorMsgDirective, MyCustomIfDirective],
})
export class SharedModule {}
