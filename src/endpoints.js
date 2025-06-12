import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rh-portfolio-be.onrender.com/api",
});

export function getProjects() {
  return apiClient.get("/").then(({ data }) => {
    console.log(data);
    return data;
  });
}
