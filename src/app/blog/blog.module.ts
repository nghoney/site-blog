import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';

@NgModule({
  declarations: [BlogComponent,BlogContentComponent, BlogOverviewComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
    SharedModule,
    TranslocoRootModule,
  ],
})
export class BlogModule {}
