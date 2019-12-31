# Query
Retrieves all of the records for a given `modelName` with the passed object serialized as query params.

## Arguments
- `@modelName`: (required) A `string` of the singular model name.
- `@params`: An `object`. Utilizes Ember's `hash` helper which takes a list of key-value pairs at invocation time and outputs an object.

## Block Parameters 
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