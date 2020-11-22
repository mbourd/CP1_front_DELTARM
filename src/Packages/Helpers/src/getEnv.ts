export const getEnv = (env: string): string => {
  return process.env[`REACT_APP_${env}`] as string;
};
