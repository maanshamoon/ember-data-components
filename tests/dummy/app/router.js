import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  docsRoute(this, function() {

    this.route('docs');
    this.route('installation');

    this.route('components', function() {
      this.route('find-record');
      this.route('find-all');
      this.route('peek-all');
      this.route('peek-record');
      this.route('query');
      this.route('query-record');
    });
    
  });
  
});