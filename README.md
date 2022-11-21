## Gatsby with Netlify Edge Functions

This repo uses Gatsby + Netlify Edge Functions to exemplify an Edge A/B testing implementation. It requires a pretty dirty (albeit small) patch to Gatsby to pull off because we need to tell Gatsby how to decide which page to show for the A/B test. It would be good to allow for this without the need of the patch but it's currently unclear how to handle that.

### Demo site
See: https://papaya-dodol-9f548b.netlify.app

Select your cookie value for the `test_bucket` cookie. Either `a` or `b`. Depending on this value, the Home A or Home B template will be loaded.

### Getting started
- Clone the repo locally
- Setup `netlify-cli` npm package
- Build the Gatsby site (`npm run build`)
- Run `netlify dev` to host the Netlify Edge Function and point it to the static Gatsby site (see `netlify.toml` file)
