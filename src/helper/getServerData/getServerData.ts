export async function getServerData() {
  try {
    const res = await fetch("http://localhost:3001/quests");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching server data:", error);
    return null; 
  }
}
