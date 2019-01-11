import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { DetailsComponent } from './details/details.component';
import { ProductComponent } from './product/product.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SpecsComponent } from './specs/specs.component';

const urls: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'details/:item',
    component: DetailsComponent
  },
  {
    path: 'product',
    component: ProductComponent,
    children:[
      {
        path: 'reviews',
        component: ReviewsComponent
      },
      {
        path: 'specs',
        component: SpecsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PricingComponent,
    AboutComponent,
    HomeComponent,
    ItemsComponent,
    DetailsComponent,
    ProductComponent,
    ReviewsComponent,
    SpecsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(urls)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
