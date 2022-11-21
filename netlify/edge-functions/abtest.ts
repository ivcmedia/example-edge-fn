import type { Context } from "https://edge.netlify.com";

export default (request: Request, context: Context) => {
  // look for existing "test_bucket" cookie
  const bucketName = "test_bucket";

  let bucket = context.cookies.get(bucketName);

  if (!bucket) {
    // if no "test_bucket" cookie is found, assign the user to a bucket
    // in this example we're using two buckets (a, b) with an equal weighting of 50/50
    const weighting = 0.5;

    // get a random number between (0-1)
    // this is a basic example and you may want to experiment
    const random = Math.random();
    bucket = random <= weighting ? "a" : "b";

    // set the new "test_bucket" cookie
    context.cookies.set({
      name: bucketName,
      value: bucket,
    });
  }

  const rewritePage = bucket === 'a' ? '/home-a/' : '/home-b/'
  
  return context.rewrite(rewritePage)
};