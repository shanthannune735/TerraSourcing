import { ExporterDetails } from "../types/types";

const API_URL = "https://takeda.gmbapi.multipliersolutions.in/api/"

const exporterLogin = async ({email, password} : { email: string, password: string }) => {
  const response = await fetch(`${API_URL}exporter/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email, password
    })
  })
  return await response.json()
}

const exporterRegistration = async (updatedDetails: ExporterDetails) => {
  try {
    const response = await fetch(`${API_URL}exporter/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDetails),
    });

    if (response.ok) {
      const data = await response.json();
      return data
    } else {
      return new Error("Failed to create user.")
    }
  } catch (error) {
    return new Error("Error occurred while creating user.")
  }
}

export { exporterLogin, exporterRegistration }
