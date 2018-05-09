export default (orgs, searchWord) => {
  const filteredOrgs = [];
  const searchValue = searchWord.toLowerCase();
  orgs.map(org => {
    (org.name.toLowerCase().includes(searchValue))
    ||
    (org.city.toLowerCase().includes(searchValue))
    ||
    (org.country.toLowerCase().includes(searchValue))
      ?
      filteredOrgs.push(org)
      :
      null;
  });
  return filteredOrgs;
};
