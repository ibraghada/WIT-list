export default (orgs, filters) => {
  const filteredOrgs = [];
  orgs.map(org => {
    filters.map(filter => {
      (org.sub_cat_id === filter) ?
        filteredOrgs.push(org.org_id)
        :
        null;
    });
  });
  console.log(filteredOrgs);
  return filteredOrgs;
};
