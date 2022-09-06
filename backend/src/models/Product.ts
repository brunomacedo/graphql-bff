import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Product {
  @Field(__type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  stock: number;

  @Field()
  thumb: string;
}
