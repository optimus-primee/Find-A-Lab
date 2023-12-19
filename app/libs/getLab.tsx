export default async function getLab(labId: string) {
  const res = await fetch(
    `https://json-find-a-lab.onrender.com/labs/${labId}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  if (!res.ok) throw new Error("failed to fetch data");

  const data = await res.json();

 
  console.log(data);
  return data;
}
