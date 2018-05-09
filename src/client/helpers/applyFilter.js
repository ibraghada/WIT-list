export default (orgSubCats, orgs, filters) => {
  const filteredOrgs = [];
  orgSubCats.map(orgSubCat => {
    filters.map(filter => {
      (orgSubCat.sub_cat_id === filter && !filteredOrgs.includes(orgSubCat.org_id)) ?
        (
          orgs.map(
            org => {
              if (org.id === orgSubCat.org_id) {
                filteredOrgs.push(org);
              }
            }
          )
        )
        :
        null;
    });
  });
  return filteredOrgs;
};
