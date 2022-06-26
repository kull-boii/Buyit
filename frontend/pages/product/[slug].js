import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";

export default function ProductDetails() {
  // fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: "h-and-m-girls-green-solid-zip-through-hoodie" },
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  console.log(data);

  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>title</h3>
        <p>description</p>
      </div>
      <div>
        <span>Quantity</span>
        <button>Plus</button>
        <p>0</p>
        <button>Minus</button>
      </div>
      <button>Add to cart</button>
    </div>
  );
}
