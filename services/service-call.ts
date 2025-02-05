import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useNuxtApp } from "nuxt/app";
import getEnvironmentVariables, { EnvLabel } from "./../config/env-variables";
// import { useGlobalLoader } from "~/stores/global-loader";

export interface IQueryParam {
  [key: string]: string | number;
}

type TServiceCall = {
  endpoint: string;
  method: string;
  body?: any;
  pathParams?: string | number;
  queryParams?: IQueryParam;
};

export function getHeaders() {
  const headers: { [key: string]: string } = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
    "Access-Control-Allow-Headers": "*",
  };

  return headers;
}

export const generateApiEndPoint = ({
  endpoint,
  pathParams,
  queryParams,
}: {
  endpoint: string;
  pathParams?: string | number;
  queryParams?: IQueryParam;
}) => {
  const baseURL = getEnvironmentVariables(EnvLabel.apiBaseURL);
//   console.log("baseURL=>",baseURL);

  let url = `https://localhost:7072/api/Page/${endpoint}`;


  if (pathParams) url = `${url}/${pathParams}`;

  if (queryParams) {
    const params: string[] = [];
    for (const [key, value] of Object.entries(queryParams)) {
      params.push(`${key}=${value}`);
    }

    if (params.length > 0) url = `${url}?${params.join("&")}`;
  }
  return url;
};

export default async function ServiceCall({
  endpoint,
  method,
  body,
  pathParams = "",
  queryParams = {},
}: TServiceCall) {
  // Access the active Pinia instance via Nuxt context
  const nuxtApp = useNuxtApp();

//   const globalLoader = useGlobalLoader(nuxtApp.$pinia);
//   globalLoader.setGlobalLoading();

  const url = generateApiEndPoint({ endpoint, pathParams, queryParams });
//   console.log("url=>",url);
  const headers = getHeaders();
  const options: AxiosRequestConfig<any> = {
    method,
    headers,
  };
  if (body) options.data = body;

  try {
    const response: AxiosResponse = await axios({
      url,
      ...options,
    });

    // globalLoader.resetGlobalLoading();

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    const responseStatus = error;
    // globalLoader.resetGlobalLoading();

    return {
      status: responseStatus,
      data: "error",
    };
  }
}

