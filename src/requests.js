const URL = "https://roni-lahav.free.beeceptor.com/my/api/path";

export const getDataset = () =>
  fetch(URL)
    .then((res) => res.json())
    .then((res) => res.bloodTestConfig)
    .catch((err) => {
      console.log(err);
    });
