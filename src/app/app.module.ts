import { PropertiesModule } from 'src/app/pages/properties/properties.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { RevealComponent } from './animation/reveal/reveal.component';
import { MainMapComponent } from './maps/main-map/main-map.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/posts/post/post.component';
import { TopicsComponent } from './pages/posts/topics/topics.component';
import { TopicComponent } from './pages/posts/topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    RevealComponent,
    MainMapComponent,
    HomeComponent,
    HeroComponent,
    ContactComponent,
    CategoriesComponent,
    CategoryComponent,
    PostsComponent,
    PostComponent,
    TopicsComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PropertiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
