# Find Record
Retrieves a record by its `modelName` and `id`.

## Arguments
- `@modelName`: (required) A `string` of the singular model name.
- `@id`: (required) A number of `string` of the model id.
- `@reload`: (optional) A `boolean`. Default is false. Set to true to force reload the model data.
- `@backgroundReload`: (optional) A `boolean`. Default is false. Set to true to download the model in the background.

## Block Parameters 
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
