


```graphql
mutation PutPost {
  addPost(author: "laardee", title: "hello", content: "world") {
    id
  }
}
```


```graphql
query GetPost {
  getPost(id: "fbd145eb-02a3-46cf-856e-e05e2450c91b") {
    id
    author
    created
    title
    content
  }
}
```
