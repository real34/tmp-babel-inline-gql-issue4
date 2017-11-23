import { graphql } from "react-apollo";

export default ({ ProductGalleryQuery }) =>
  graphql(ProductGalleryQuery, {
    options: ({ limit }) => ({
      variables: {
        limit: limit
      }
    }),
    props: ({ data, ownProps }) => ({
      topPosts: data.loading ? [] : data.topPosts
    })
  });
