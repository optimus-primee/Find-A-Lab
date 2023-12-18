export default async function getLab(labId: string) {
  const res = await fetch(`http://localhost:3031/labs/${labId}`,{
    next:{
      revalidate:0
    }
  });

  if (!res.ok) throw new Error("failed to fetch data");

  const data = await res.json();

 
  console.log(data);
  return data;
}
