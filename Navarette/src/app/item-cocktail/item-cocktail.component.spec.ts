import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCocktailComponent } from './item-cocktail.component';

describe('ItemCocktailComponent', () => {
  let component: ItemCocktailComponent;
  let fixture: ComponentFixture<ItemCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCocktailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
