exports.typeDefs = `

type Recipe {
  _id: ID
  name: String!
  category: String!
  description: String!
  instructions: String!
  createdDate: String
  likes: Int
  username: String
}

type User {
  _id: ID
  username: String! @unique
  password: String!
  email: String!
  joineDate: String
  favorites: [Recipe]
}

type Query {
  getCurrentUser: User
  getAllRecipes: [Recipe]
}

type Token {
  token: String!
}

type Mutation {
  addRecipe(name: String!, description: String!, category: String!, instructions: String!, username: String ): Recipe

  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}

`;

