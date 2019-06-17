import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "initial"
})
export class InitialPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) return value;
    return value.charAt(0).toUpperCase();
  }
}
