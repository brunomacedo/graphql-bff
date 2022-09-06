import { gql, useQuery } from "@apollo/client";

const GET_DASHBOARD = gql`
  query {
    topSeller {
      id
      name
      thumb
    }

    discounted {
      id
      name
      thumb
    }

    unbeatable {
      id
      name
      thumb
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_DASHBOARD);

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <>
        <h2>Error!</h2>
        <div>{error.message}</div>
      </>
    )
  }

  return (
    <>
      <div>
        <h2>Top Seller</h2>
        {data?.topSeller && (
          <code>
            {JSON.stringify(data.topSeller)}
          </code>
        )}
      </div>

      <div>
        <h2>Discounted</h2>
        {data?.discounted && (
          <code>
            {JSON.stringify(data.discounted)}
          </code>
        )}
      </div>

      <div>
        <h2>Unbeatable</h2>
        {data?.unbeatable && (
          <code>
            {JSON.stringify(data.unbeatable)}
          </code>
        )}
      </div>
    </>
  )
}

export default App;
