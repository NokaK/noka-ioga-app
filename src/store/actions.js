export const publish = ({ title, description, id }) => ({
  type: 'PUBLISH',
  title,
  description,
  id
});
