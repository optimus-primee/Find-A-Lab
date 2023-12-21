export default async function getLabs() {
  const res = await fetch("https://json-find-a-lab.onrender.com/labs", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) throw new Error("failed to fetch data");

  
  const data = await res.json();

  console.log(data);
  return data;
}
