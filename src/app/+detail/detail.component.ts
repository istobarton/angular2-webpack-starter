import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
     <div class="container">
      <div class="main">
        <img class="profile" [src]=" 'assets/img/headshot.jpg' " alt="Cowboy Willy Isto">
        <h1>isto barton</h1>
    </div>
      <div class="tagline">
        <p>
          Software Engineer by day.<br> Theatre fiend by night.
        </p>
      </div>
      <div class="links">
        <a href="mailto:istobarton@gmail.com">email</a>
        <a href="https://docs.google.com/document/d/16AUDylQAXch03o_ASd5hE6NTGCn19mIq2NtNA8E4O0k/edit?usp=sharing" target="_blank">resume</a>
      </div>
      <div class="social-media">
        <a href="https://github.com/istobarton" target="_blank"><i class="icon ion-social-github"></i></a>
        <a href="https://www.linkedin.com/in/istobarton" target="_blank"><i class="icon ion-social-linkedin"></i></a>
        <a href="https://twitter.com/istoornotisto" target="_blank"><i class="icon ion-social-twitter"></i></a>
      </div>
    </div>
  `,
})
export class DetailComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Detail` component');
  }

}
