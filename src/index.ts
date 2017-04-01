import { NgModule, Directive, ElementRef, Input, AfterViewChecked, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector: "[preventScroll]",
    host: {
        "(mouseenter)": "onEnter()",
        "(mouseleave)": "onLeave()",
        "(touchstart)": "onEnter()",
        "(touchend)"  : "onLeave()",
    }
})
/**
 * Prevents an element from scrolling whenever the user is making actions
 * within the element where this directive was applied.
 */
export class PreventScrollDirective implements AfterViewChecked, OnChanges {
    /**
     * The id of the element to prevent scroll when this element is focused.
     * 
     * Can be empty, and if so, the target will be the element itself.
     * 
     * **Special ID's:** `body`
     */
    @Input() preventScroll: string;
    private target: HTMLElement;

    private element: HTMLElement;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;
    }

    ngAfterViewChecked() {
        if (!this.target) {
            this.updateTarget();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["preventScroll"]) {
            this.updateTarget();
        }
    }

    private onEnter() {
        this.target.style.overflow = "hidden";
    }

    private onLeave() {
        this.target.style.overflow = "auto";
    }

    private updateTarget() {
        // Self
        if (!this.preventScroll) {
            this.target = this.element;
        }
        // Body
        else if (this.preventScroll == "body") {
            this.target = document.body;
        }
        // Specific ID
        else {
            this.target = document.getElementById(this.preventScroll);
        }
    }
}

@NgModule({
    declarations: [PreventScrollDirective],
    exports: [PreventScrollDirective]
})
export class PreventScrollModule {}