import * as $ from 'jquery';

declare global {
  interface JQuery {
    slick(options?: any): JQuery;
  }
}
