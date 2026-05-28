import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-owl-companion',
  standalone: true,
  imports: [],
  templateUrl: './owl-companion.component.html',
  styleUrl: './owl-companion.component.scss',
})
export class OwlCompanionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('owlEl') owlEl?: ElementRef<HTMLElement>;

  visible = false;

  private targetX = 0;
  private targetY = 0;
  private owlX = 0;
  private owlY = 0;
  private prevOwlX = 0;
  private facingRight = false;
  private rafId = 0;

  private readonly ease = 0.09;
  private readonly trailDistance = 40;
  private readonly frameWidth = 186;
  private readonly frameHeight = 170;
  private readonly scale = 0.45;

  ngAfterViewInit(): void {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

    this.visible = !prefersReducedMotion && hasFinePointer;

    if (!this.visible) {
      return;
    }

    this.targetX = window.innerWidth / 2;
    this.targetY = window.innerHeight / 3;
    this.owlX = this.targetX;
    this.owlY = this.targetY;
    this.prevOwlX = this.owlX;

    this.rafId = requestAnimationFrame(this.loop);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.visible) {
      return;
    }
    this.targetX = event.clientX;
    this.targetY = event.clientY;
  }

  private loop = (): void => {
    const dx = this.targetX - this.owlX;
    const dy = this.targetY - this.owlY;
    const distance = Math.hypot(dx, dy) || 1;

    const followX = this.targetX - (dx / distance) * this.trailDistance;
    const followY = this.targetY - (dy / distance) * this.trailDistance;

    this.owlX += (followX - this.owlX) * this.ease;
    this.owlY += (followY - this.owlY) * this.ease;

    const moveX = this.owlX - this.prevOwlX;
    if (Math.abs(moveX) > 0.3) {
      this.facingRight = moveX > 0;
    }
    this.prevOwlX = this.owlX;

    const el = this.owlEl?.nativeElement;
    if (el) {
      const halfW = (this.frameWidth * this.scale) / 2;
      const halfH = (this.frameHeight * this.scale) / 2;
      el.style.transform = `translate(${this.owlX - halfW}px, ${this.owlY - halfH}px)`;
      el.classList.toggle('facing-right', this.facingRight);
    }

    this.rafId = requestAnimationFrame(this.loop);
  };
}
