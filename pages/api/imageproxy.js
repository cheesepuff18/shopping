// TODO: Turn page into typescript
// Mid-step in grabbing images from external URL's. Sidesteps need to add all image URL's into Next's bypass list
export default async (req, res) => {
    const url = decodeURIComponent(req.query.url);
    const result = await fetch(url);
    const body = await result.body;
    body.pipe(res);
  };