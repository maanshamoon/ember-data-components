# Peek All
Retrieves all of the records for a given `modelName` that are already loaded into the store, without making a network request.

## Arguments
- `@modelName`: (required) A `string` of the singular model name.

## Block Parameters 
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