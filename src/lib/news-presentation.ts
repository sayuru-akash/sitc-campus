// Poster images are shown intact. Size their downloaded pixels to the visible
// image inside the frame, rather than to the empty space around it.
export function newsImageScale(
  story: { image: string; imageRatio?: number },
  frameRatio: number,
) {
  return story.imageRatio ? Math.min(1, story.imageRatio / frameRatio) : 1;
}
export function isNewsPoster(story: { image: string; imageRatio?: number }) {
  return typeof story.imageRatio === 'number';
}

const newsDateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});
export const formatNewsDate = (date: string) =>
  newsDateFormatter.format(new Date(date));
