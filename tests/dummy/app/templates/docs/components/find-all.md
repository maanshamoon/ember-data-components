# Find All
Retrieves all of the records for a given `modelName`.

## Arguments
- `@modelName`: (required) A `string` of the singular model name.
- `@reload`: (optional) A `boolean`. Default is false. Set to true to force reload the model data.
- `@backgroundReload`: (optional) A `boolean`. Default is false. Set to true to download the model in the background.

## Block Parameters
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