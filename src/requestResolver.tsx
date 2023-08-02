export async function resolve<T>(promise: Promise<T>) {
  const resolved: { data: T | null; error: any | null } = {
    data: null,
    error: null,
  };

  try {
    resolved.data = await promise;
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}