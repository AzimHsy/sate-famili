// Shared restaurant info (not branch-specific).
// Branch-specific data lives in branchData.ts.
export { BRANCHES, getBranch, waLinkForBranch } from "./branchData";
export type { Branch, BranchHours } from "./branchData";

export const CONTACT = {
  name: "Restoran Sate Famili",
  email: "hello@satefamili.my",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};
