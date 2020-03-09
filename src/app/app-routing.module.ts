import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 路由配置
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '**', loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule) },
];

// forRoot()-- 在应用的顶级配置路由器，提供路由需要的服务提供商和指令，基于浏览器当前URL执行首次导航
// enableTarcing -- 查看导航在生命周期中发生的事件，并输出到控制台
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
