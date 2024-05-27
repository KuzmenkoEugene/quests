export async function postOrderQuest(data: any, isLegal: boolean): Promise<string> {
    try {
      const response = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, isLegal }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.status.toString();
    } catch (error) {
      console.error("Error:", error);
      return "error";
    }
  }
  