import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewEncapsulation
} from "@angular/core";
import { TooltipPosition, MatTooltipModule } from "@angular/material/tooltip";
import { NgClass, NgFor } from "@angular/common";
import { BarChartItem } from "./bar-chart-item";

@Component({
  selector: "custom-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [MatTooltipModule, NgClass, NgFor]
})
export class BarChartComponent implements OnInit, OnChanges {

  currentIndex!: number;
  maxBarValue!: number;

  @Input() data: BarChartItem[] = [];
  @Input() tooltipPosition: TooltipPosition = 'after';
  @Output() selectedBar: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes["data"].currentValue;
    this.data = this.processImageData(this.data);
    }

  ngOnInit(): void {
    this.currentIndex = 0;
  }

  public onBarChartClick(index: number) {

    if (index === this.currentIndex){
      return;
    }

    this.currentIndex = index;
    this.selectedBar.emit(index);
  }

  private processImageData(data: BarChartItem[]): BarChartItem[] {

    let lastImagesBars: BarChartItem[] = data;

    // Get max length per item
    this.getMaxLength(lastImagesBars);

    // Modify the date format for each image
    return lastImagesBars.map(image => {

      return ({
        ...image,
        xAxisLabel: this.getMonthAndDay(image.xAxisLabel)
      });
    });
  }

  private getMonthAndDay(input: string) {
    const dateObj = new Date(input);
    const month = dateObj.toLocaleString("default", { month: "numeric" });
    const day = dateObj.getDate();
    return `${day}.${month}`;
  }



  private getMaxLength(items: BarChartItem[]) {
    const numbers: number[] = items.map(item => item.value);
    this.maxBarValue = Math.max(...numbers);
  }

}
