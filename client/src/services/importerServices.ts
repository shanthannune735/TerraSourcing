import { ImporterDetails } from "../types/types";

const API_URL = "https://takeda.gmbapi.multipliersolutions.in/api/"

const importerLogin = async ({email, password} : { email: string, password: string }) => {
  const response = await fetch(`${API_URL}importer/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email, password
    })
  })
  console.log(response)
  return await response.json()
}

const importerRegistration = async (updatedDetails: ImporterDetails) => {
  try {
    const response = await fetch(`${API_URL}importer/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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

export { importerLogin, importerRegistration }
