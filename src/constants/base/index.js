//  @TODO - remove the comment after e2e testing
// const GB_BASE_URL = process.env.NODE_ENV === 'production'   ? '/e-commenceland/'   : '';
// const GB_BASE_URL = '/e-commenceland/';
const GB_BASE_URL = process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "";

export default GB_BASE_URL;
