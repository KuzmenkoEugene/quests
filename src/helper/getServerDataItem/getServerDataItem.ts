

export async function getServerDataItem(id: string) {
    try {
      const res = await fetch(`http://localhost:3001/quests/${id}`);
  
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
  