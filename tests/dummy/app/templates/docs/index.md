# Introduction
`ember-data-components` is a set of Ember components which provides direct access to your API data directly in your template without having to write any fetch & wait code in JavaScript. It utilizes Ember Data's various data fetch methods and wraps each in a component and makes all that functionality available in your component block directly with an easy interface. Check out this before & after example:

## A bare minimum example

### Before

In `../components/load-posts.js`
```javascript
import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { action } from '@ember/object';

export default class LoadPosts extends Component {
    @service store;
    @tracked posts = null;
    @tracked isLoading = true;
	@tracked hasError = false;

	@(task(function * () {
        this.isLoading = true;
    
	  return yield this.store.findAll('post')
	  .then(response => {
          this.isLoading = false;
          this.posts = response;
          return response;
      })
	  .catch(() => {
          this.isLoading = false;
          this.hasError = true;
      });
	})) data;
  
	@action
	fetch() {
	  this.data.perform();
	}
}
```
And in `../components/load-posts.hbs`

```handlebars
<div
  {{did-insert this.fetch}}
>
    {{#if isLoading}}
        // posts data loading...
    {{else if hasError}}
        // show error
    {{else}}
        {{#each posts as |post|}}
            {{post.title}}
        {{/each}}
    {{/if}}
</div>

```

### After

Now, you only need `../components/load-posts.hbs`

```handlebars 
<FindAll
    @modelName = "post"
    as |posts isLoading hasError|
>
    {{#if isLoading}}
        // posts data loading...
    {{else if hasError}}
        // show error
    {{else}}
        {{#each posts as |post|}}
            {{post.title}}
        {{/each}}
    {{/if}}
</FindAll>
```