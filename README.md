# ember-data-components

Built with ❤️ in [Ember Octane](https://emberjs.com/editions/octane/).

A collection of components that provides an interface for retrieving records with Ember Data directly from templates.

## Installation

```
ember install ember-data-components
```

## Components
- [Find Record](#find-record)
- [Peek Record](#peek-record)
- [Find All](#find-all)
- [Peek All](#peek-all)
- [Query](#query)
- [Query Record](#query-record)

## Usage

### Find Record
Retrieves a record by its `modelName` and `id`.

#### Arguments
- `@modelName`: (required) A `string` of the singular model name.
- `@id`: (required) A number of `string` of the model id.
- `@reload`: (optional) A `boolean`. Default is false. Set to true to force reload the model data.
- `@backgroundReload`: (optional) A `boolean`. Default is false. Set to true to download the model in the background.

#### Block Parameters 
- `data`: Data returned.
- `isLoading`: A `boolean`. Initially is set to `true`. Switches to `false` when the fetch request is completed.
- `hasError`: A boolean. Initially is set to `false`. Switches to `true` when there is an error with the fetch request.

Basic example (Makes a `[GET]` request to `/posts/1`)
```handlebars 
<FindRecord
    @modelName = "post"
    @id = 1
    as |post|
>
    {{post.title}}
</FindRecord>
```

Advanced example (Makes a `[GET]` request to `/posts/1`)
```handlebars 
<FindRecord
    @modelName = "post"
    @id = 1
    @reload = true
    as |post isLoading hasError|
>
    {{#if isLoading}}
        // loading post data
    {{else if hasError}}
        // show error
    {{else}}
        // show post data
    {{/if}}
</FindRecord>
```

### Peek Record
Retrieves a record by its `modelName` and `id`, without making a network request. This will return the record only if it is already present in the store.

#### Arguments
- `@modelName`: (required) A `string` of the singular model name.
- `@id`: (required) A number of `string` of the model id.

#### Block Parameters 
- `data`: Data returned.

example:
```handlebars 
<PeekRecord
    @modelName = "post"
    @id = 1
    as |post|
>
    {{post.title}}
</PeekRecord>
```

### Find All
Retrieves all of the records for a given `modelName`.

#### Arguments
- `@modelName`: (required) A `string` of the singular model name.
- `@reload`: (optional) A `boolean`. Default is false. Set to true to force reload the model data.
- `@backgroundReload`: (optional) A `boolean`. Default is false. Set to true to download the model in the background.

#### Block Parameters
- `data`: Data returned.
- `isLoading`: A `boolean`. Initially is set to `true`. Switches to `false` when the fetch request is completed.
- `hasError`: A boolean. Initially is set to `false`. Switches to `true` when there is an error with the fetch request.

Basic example (Makes a `[GET]` request to `/posts`)
```handlebars 
<FindAll
    @modelName = "post"
    as |posts|
>
    {{#each posts as |post|}}
        {{post.title}}
    {{/each}}
</FindAll>
```

Advanced example (Makes a `[GET]` request to `/posts`)
```handlebars 
<FindRecord
    @modelName = "post"
    @backgroundReload = true
    as |posts isLoading hasError|
>
    {{#if isLoading}}
        // loading post data
    {{else if hasError}}
        // show error
    {{else}}
        {{#each posts as |post|}}
            {{post.title}}
        {{/each}}
    {{/if}}
</FindRecord>
```

### Peek All
Retrieves all of the records for a given `modelName` that are already loaded into the store, without making a network request.

#### Arguments
- `@modelName`: (required) A `string` of the singular model name.

#### Block Parameters 
- `data`: Data returned.

example:
```handlebars 
<PeekAll
    @modelName = "post"
    as |posts|
>
    {{#each posts as |post|}}
        {{post.title}}
    {{/each}}
</PeekAll>
```

### Query
Retrieves all of the records for a given `modelName` with the passed object serialized as query params.

#### Arguments
- `@modelName`: (required) A `string` of the singular model name.
- `@params`: An `object`. Utilizes Ember's `hash` helper which takes a list of key-value pairs at invocation time and outputs an object.
#### Block Parameters 
- `data`: Data returned.
- `isLoading`: A `boolean`. Initially is set to `true`. Switches to `false` when the fetch request is completed.
- `hasError`: A boolean. Initially is set to `false`. Switches to `true` when there is an error with the fetch request.

Basic example (Makes a `[GET]` request to `/posts?filter[name]=Max`)
```handlebars 
<Query
    @modelName = "post"
    @params = (hash
        filter = (hash
            name = "Max"
        )
    )
    as |posts|
>
    {{#each posts as |post|}}
        {{post.title}}
    {{/each}}
</Query>
```

### Query Record
Retrieves a single record for a given `modelName` with the passed object serialized as query params.

#### Arguments
- `@modelName`: (required) A `string` of the singular model name.
- `@params`: An `object`. Utilizes Ember's `hash` helper which takes a list of key-value pairs at invocation time and outputs an object.
#### Block Parameters 
- `data`: Data returned.
- `isLoading`: A `boolean`. Initially is set to `true`. Switches to `false` when the fetch request is completed.
- `hasError`: A boolean. Initially is set to `false`. Switches to `true` when there is an error with the fetch request.

Basic example (Makes a `[GET]` request to `/posts?filter[email]=max@gmail.com&title=Engineer`)
```handlebars 
<QueryRecord
    @modelName = "post"
    @params = (hash
        filter = (hash
            email = "max@gmail.com"
        )
        title = "Engineer"
    )
    as |post|
>
    {{post.title}}
</QueryRecord>
```

## Compatibility
* Ember.js v3.8 or above
* Ember CLI v2.13 or above
* Node.js v8 or above

## Contributing
See the [Contributing](CONTRIBUTING.md) guide for details.

## License
This project is licensed under the [MIT License](LICENSE.md).