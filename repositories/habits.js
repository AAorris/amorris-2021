export default async function getHabits(habitService) {
  const data = await habitService.selectAllFields();
  return data
    .map(({ Summary, ...fields }) => fields)
    .sort((a, b) => {
      return new Date(b.Day).getTime() - new Date(a.Day).getTime();
    });
}
