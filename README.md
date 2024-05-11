# Type Defs Transform for GraphQL Mesh

Type Defs Transform - is a transformation plugin for GraphQL Mesh that allows you to extend and modify your existing GraphQL schema. This transform provides a powerful way to add new types, extend existing ones, or even introduce new queries and mutations, making it highly flexible for evolving your API without altering the underlying services directly.

## Installation

Before you can use the Type Defs Transform, you need to install it along with GraphQL Mesh if you haven't already done so. You can install these using npm or yarn.

```bash
npm install @dmamontov/graphql-mesh-type-defs-transform
```

or

```bash
yarn add @dmamontov/graphql-mesh-type-defs-transform
```

## Configuration

### Modifying tsconfig.json

To make TypeScript recognize the Type Defs Transform, you need to add an alias in your tsconfig.json.

Add the following paths configuration under the compilerOptions in your tsconfig.json file:

```json
{
  "compilerOptions": {
    "paths": {
       "type-defs": ["./node_modules/@dmamontov/graphql-mesh-type-defs-transform"]
    }
  }
}
```

### Adding the Transform to GraphQL Mesh

You need to include the Defs Transform in your GraphQL Mesh configuration file (usually .meshrc.yaml). Below is an example configuration that demonstrates how to use this transform:

```yaml
transforms:
  - typeDefs:
      - /build/extend-schema.graphql
```

## Conclusion

Remember, always test your configurations in a development environment before applying them in production to ensure that everything works as expected.