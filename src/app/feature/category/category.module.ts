import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatgoryDetailsResolver } from './category-details/category-details.resolver';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryCardComponent,
    CategoryDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CategoryComponent },
      {
        path: 'details',
        component: CategoryDetailsComponent,
        resolve: {
          data: CatgoryDetailsResolver,
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
      },
    ]),
    SharedModule,
  ],
  exports: [CategoryComponent],
})
export class CategoryModule {}
