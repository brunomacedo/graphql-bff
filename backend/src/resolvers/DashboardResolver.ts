import { /* Arg, Mutation, */ Query, Resolver } from "type-graphql";
import axios from "axios";
import { Product } from "../models/Product";
import { CATALOGUE } from "../../environments";

@Resolver()
export class DashboardResolver {
  @Query(() => [Product])
  async topSeller() {
    return axios.get(`${CATALOGUE}/top-seller`)
      .then((res) => res.data.avaibleStock as Product[])
      .catch(() => [])
  }

  @Query(() => [Product])
  async discounted() {
    return axios.get(`${CATALOGUE}/discounted`)
      .then((res) => res.data.avaibleStock as Product[])
      .catch(() => [])
  }

  @Query(() => [Product])
  async unbeatable() {
    return axios.get(`${CATALOGUE}/unbeatable`)
      .then((res) => res.data.dataToSend as Product[])
      .catch(() => [])
  }
}
