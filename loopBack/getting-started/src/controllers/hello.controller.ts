// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';
export class HelloController {
  //constructor() {}
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }
}
