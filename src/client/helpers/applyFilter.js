export default (orgSubCats, orgs, filters) => {
  const filteredOrgs = [];

  orgSubCats.map(orgSubCat => {
    filters.map(filter => {
      if (orgSubCat.sub_cat_id === filter) {
        orgs.map(
          org => {
            if (org.id === orgSubCat.org_id && !filteredOrgs.includes(org)) {
              filteredOrgs.push(org);
            }
          }
        );
      }
    });
  });

  return filteredOrgs;
};
