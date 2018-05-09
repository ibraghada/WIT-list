export default (orgs, filters) => {
  const filteredOrgs = [];
  orgs.map(org => {
    filters.map(filter => {
      (org.sub_cat_id === filter && !filteredOrgs.includes(org.org_id)) ?
        filteredOrgs.push(org.org_id)
        :
        null;
    });
  });
  return filteredOrgs;
};
