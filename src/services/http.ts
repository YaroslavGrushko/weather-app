const get = async <T>(url: string): Promise<T> => {
    let res;
    try {
      res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
    } catch (e) {
      throw new Error("Error with fetch");
    }
  
    let data: T;
    try {
      data = await res.json();
    } catch (err) {
      throw new Error("Error with response parsing");
    }
  
    return data;
  };
  
  export default get;