/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://main.dgpk7onztx7nq.amplifyapp.com/';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'us-east-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '78v2l2inq6ugd9muqdp0aicb9g',
  USER_POOL_ID: 'us-east-1_csrVCNQ75',
  IDENTITY_POOL_ID: 'us-east-1:c8e36c56-c1eb-4eb3-bf04-5a75ced10532',
  GRAPHQL_ENDPOINT: 'https://lwth4wgw5ndmtcqbmqb2wydugy.appsync-api.us-east-1.amazonaws.com/graphql',
};

export default configDevelopment;
