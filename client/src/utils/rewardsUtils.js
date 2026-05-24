export const REWARD_TIERS = [
  { name: "Bronze", minPoints: 0 },
  { name: "Silver", minPoints: 500 },
  { name: "Gold", minPoints: 1000 },
];

export function getCurrentTier(points) {
  let currentTier = REWARD_TIERS[0];

  for (const tier of REWARD_TIERS) {
    if (points >= tier.minPoints) {
      currentTier = tier;
    }
  }

  return currentTier;
}