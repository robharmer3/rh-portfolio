import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rh-portfolio-be.onrender.com/api",
});

export function getProjects() {
  return apiClient.get("/projects").then(({ data }) => {
    return data;
  });
}

export function getCategories() {
  return apiClient.get("/categories").then(({ data }) => {
    return data;
  });
}

export function getSingleProject(project_id) {
  return apiClient.get(`/projects/${project_id}`).then(({ data }) => {
    return data;
  });
}
