export async function sendContactForm(data) {
    try {
      const response = await fetch("http://54.251.167.191:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Có lỗi khi gửi biểu mẫu");
      }
  
      return await response.text();
    } catch (error) {
      console.error("Lỗi khi gửi liên hệ:", error.message);
      throw error;
    }
  }
  