import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchComponent} from '../search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register onChange correctly', () => {
    const input = 'test';
    const onChange = jasmine.createSpy();
    component.registerOnChange(onChange);
    component.onChange(input);
    expect(onChange).toHaveBeenCalledWith(input);
  });

  it('should register onTouch correctly', () => {
    const onTouch = jasmine.createSpy();
    component.registerOnTouched(onTouch);
    component.onTouch();
    expect(onTouch).toHaveBeenCalled();
  });

  describe('when onInput function is called', () =>{
    it('should call onChange function', () => {
      const input = 'test';
      const onChange = jasmine.createSpy();
      component.registerOnChange(onChange);
      component.onInput(input);
      expect(onChange).toHaveBeenCalledWith(input);
    });

    it('should call onTouch function', () => {
      const onTouch = jasmine.createSpy();
      component.registerOnTouched(onTouch);
      component.onInput('');
      expect(onTouch).toHaveBeenCalled();
    });
  });
});
