import { api_endpoint } from "@/app/constants/index";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient(api_endpoint);

export const queryHomepage = async () => {
  const query = gql`
    query HomepageQuery {
      banners {
        buttonText
        description
        heading
        image {
          url
        }
      }
      ctas {
        description
        ctaText
        heading
      }
      faqs {
        question
        answer
      }
      bloglists {
        slug
        heading
        thumbnailImage {
          url
        }
        ctaText
        subdescription
      }
      services {
        description
        heading
        icon {
          url
        }
      }
    }
  `;
  const response = await graphQLClient.request(query);
  return response;
};

export const queryGallery = async () => {
  const query = gql`
    query Gallery {
      galleries {
        image {
          url
        }
        title
      }
    }
  `;
  const response = await graphQLClient.request(query);
  return response;
};

export const getSingleBlog = async (slug) => {
  const query = gql`
    query getSingleBlog($slug: String!) {
      bloglist(where: { slug: $slug }) {
        heading
        subdescription
        fulldescription {
          html
        }
        bannerimage {
          url
        }
      }
    }
  `;

  const slugName = {
    slug,
  };

  const response = await graphQLClient.request(query, slugName);
  return response;
};

export const submitContactForm = async (formValue) => {
  const mutationQuery = gql`
    mutation Contact {
      createContact(
        data: { firstname: "${formValue.firstname}", phone: ${formValue.phone}, lastname: "${formValue.lastname}", email: "${formValue.email}" }
      ) {
        id
      }
    }
  `;

  const response = await graphQLClient.request(mutationQuery);
  return response;
};

// New function for fetching histories
export const queryHistories = async () => {
  const query = gql`
    query MyQuery {
      histories {
        himage {
          url
        }
        year
        description
      }
    }
  `;
  const response = await graphQLClient.request(query);
  return response;
};
