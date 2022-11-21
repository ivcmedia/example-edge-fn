## Gatsby with Netlify Edge Functions

This repo uses Gatsby + Netlify Edge Functions to exemplify an Edge A/B testing implementation. It requires a pretty dirty (albeit small) patch to Gatsby to pull off because we need to tell Gatsby how to decide which page to show for the A/B test. It would be good to allow for this without the need of the patch but it's currently unclear how to handle that.