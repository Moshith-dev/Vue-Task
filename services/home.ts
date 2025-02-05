import ServiceCall from "./service-call";
import { home } from "./service-royes.json";


export async function GetFooterApi() {
  const response = await ServiceCall({
    ...home.Footer
  });

  return response;
}
export async function GetIconsListApi() {
  const response = await ServiceCall({
    ...home.Logos
  });

  return response;
}

export async function GetPageContentApi() {
  const response = await ServiceCall({
    ...home.content
  });
  return response;
}

export async function GetMenuApi() {
  const response = await ServiceCall({
    ...home.MenuList
  });

  return response;
}

export async function GetEmployeeApi() {
  const response = await ServiceCall({
    ...home.EmployeeList
  });

  return response;
}
