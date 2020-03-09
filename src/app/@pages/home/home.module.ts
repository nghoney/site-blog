import { LoadingModule } from './../../@core/components/loading/loading.module';
import { NgModule } from '@angular/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarModule } from 'src/app/@core/components/sidebar/sidebar.module';
import { PosterImageModule } from 'src/app/@core/components/poster-image/poster-image.module';
import { SharedPagesModule } from '../shared-pages.module';
import { ButtonModule } from 'src/app/@core/components/button/button.module';
import { PublishInfoModule } from 'src/app/@core/components/publish-info/publish-info.module';
import { AccessDirectModule } from 'src/app/@core/components/access-direct/access-direct.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedPagesModule,
    LoadingModule,
    InfiniteScrollModule,
    HomeRoutingModule,
    SidebarModule,
    PosterImageModule,
    ButtonModule,
    PublishInfoModule,
    AccessDirectModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
