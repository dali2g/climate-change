const url="https://api.chatclimate.ai/chat/"
export default async function handle (input){
    var data ={
      content:input,
      completionModel:"gpt-3.5-turbo",
      mode:"Hybrid"}
    console.log(data)
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key":"dfe20b1a046a4b27a35b0de7e3937af5",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const res=await response.json();
    console.log(res)
    return(res.response?res.response:res.detail)
  }