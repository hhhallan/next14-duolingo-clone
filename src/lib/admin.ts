import { auth } from "@clerk/nextjs";

const adminIds = ["user_2egQaRs8O0KwMK3Q9L6Jd41UJsl"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
