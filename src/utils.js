export function postProfile(profile) {
    console.log(profile);
    return fetch(
      "https://keeperinsightsdemo.uc.r.appspot.com/profiles/fastprofilefloat",
      {
        method: "POST",
  
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      },
    ).then((res) => res.json());
  }