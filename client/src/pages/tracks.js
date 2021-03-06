import React from "react";
import { Layout, QueryResult } from "../components";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";

export const TRACKS = gql`
  query ExampleQuery {
    tracksForHome {
      length
      thumbnail
      title
      id
      modulesCount
      numberOfViews
      author {
        photo
        name
        id
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, data, error } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
