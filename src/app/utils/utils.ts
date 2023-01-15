export const addToLocalStorage = (data: string) =>{
    let lcArr = localStorage.getItem('data');
    let arr = lcArr ? JSON.parse(lcArr) : [];

    arr.push(data);
    localStorage.setItem('data', JSON.stringify(arr));
}

export const getFromLocalStorage = (): string[] | [] => {
  let data = localStorage.getItem('data');

  return data ? JSON.parse(data) : [];
}
