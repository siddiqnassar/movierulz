import axios from "axios";

export async function getApiResults() {
  //   const options = {
  //     method: "GET",
  //     url: "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies",
  //   };
  //  await axios.request(options).then(function (response) {
  //     console.log(response.data);
  //     return "Hiii nassar";
  //   }).catch(function (error) {
  //     console.error(error);
  //     return "error it is ..!!";
  // });
  return await (
    await axios.get(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
  ).data;
}
