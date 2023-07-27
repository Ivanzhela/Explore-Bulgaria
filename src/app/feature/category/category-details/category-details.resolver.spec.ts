import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { categoryDetailsResolver } from './category-details.resolver';

describe('categoryDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => categoryDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
