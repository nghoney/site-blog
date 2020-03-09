import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// 路由配置
const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  
 {path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path: 'exclude', loadChildren: () => import('./exclude/exclude.module').then(m => m.ExcludeModule)},
  {path: 'slow', loadChildren: () => import('./slow/slow.module').then(m => m.SlowModule)},
  {
    path: 'manualIdle',
    loadChildren: () => import('./manual-idle/manual-idle.module').then(m => m.ManualIdleModule),
  },
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
