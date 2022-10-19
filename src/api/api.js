export const api = {
  getLatestProMatches: async () => {
    try {
      const res = await fetch("https://api.opendota.com/api/proMatches");
      const data = await res.json();

      return data;
    } catch (e) {}
  },
};
