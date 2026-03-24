export const predictHeartDisease = async (formData) => {

  const response = await fetch("http://localhost:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    throw new Error("Failed to get prediction");
  }

  return await response.json();
};