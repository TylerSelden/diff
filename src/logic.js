const allRoles = {
  Outlaw: {
    name: "Outlaw",
    team: "Outlaw",
    objective: "Kill all other players",
    kills: "Infinite",
    revives: 0,
    notes: "This is the only role that is revealed upon death, since the game ends as soon as they die.",
    required: true,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Townsperson: {
    name: "Townsperson",
    team: "Innocents",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "If all Innocents are dead by the end of the game, they all lose.",
    required: false,
    minPlayers: 0, // TODO: Townsperson only appears with minimum of n players?
    maxPlayers: Infinity,
    unique: false,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Angel: {
    name: "Angel",
    team: "Innocents",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 1,
    notes: "As soon as the Angel is killed, if they still haven't used their revive, they must shout 'Angel' or die. This effectively burns their one revive, using it on themselves instantly.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Doctor: {
    name: "Doctor",
    team: "Innocents",
    objective: "Ensure the Outlaw doesn't win",
    kills: 0,
    revives: "1 per other player",
    notes: "The Doctor, unlike the Angel, cannot use a revive on themselves. In addition, they cannot kill other players. Doctors also cannot revive the same player more than once in a single game.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Powderman: {
    name: "Powderman",
    team: "Innocents",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "If the Powderman is killed, their attacker will also be killed. However, this only happens the first time they are killed. If they are the last Innocent alive and the Outlaw kills them, the game ends and both the Outlaw and the Innocents lose.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Sharpshooter: {
    name: "Sharpshooter",
    team: "Innocents",
    objective: "Ensure the Outlaw doesn't win",
    kills: 1,
    revives: 0,
    notes: "The Sharpshooter can kill anybody within earshot by shouting to them. This counts as using the Sharpshooter's one kill.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Jester: {
    name: "Jester",
    team: "Jester",
    objective: "Get killed by another player",
    kills: 0,
    revives: 0,
    notes: "As long as the Jester is not killed by a member of the Outlaw team, they win.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  "Bounty Hunter": {
    name: "Bounty Hunter",
    team: "Bounty Hunter",
    objective: "Ensure their target dies and survive to the end of the game",
    kills: "1*",
    revives: 0,
    notes: "*The Bounty Hunter can only kill one player, but may kill them as many times as they want. Their chosen player does not need to be their target.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Spy: {
    name: "Spy",
    team: "Spy",
    objective: "Determine the role of every player",
    kills: "Infinite",
    revives: 0,
    notes: "Before roles are revealed at the end of the game, the Spy, if present, must come forth and make their guesses. If they guess all the roles correctly, they win.",
    required: false,
    minPlayers: 5,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  President: {
    name: "President",
    team: "President",
    objective: "Be alive by the end of the game",
    kills: 0,
    revives: 0,
    notes: "The President must reveal their role at the beginning of the game. The President will lose if they are killed. The President cannot exist without the Guard.",
    required: false,
    minPlayers: 5,
    maxPlayers: Infinity,
    unique: true,
    dependencies: ["Guard"],
    isDependency: false,
    enabled: true
  },
  Guard: {
    name: "Guard",
    team: "President",
    objective: "Ensure the President wins",
    kills: "Infinite",
    revives: 0,
    notes: "The Guard may not reveal their role until the President does. Even if the Guard dies, as long as the President wins, the Guard does as well. The Guard cannot exist without the President.",
    required: false,
    minPlayers: 5,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: true,
    enabled: true
  },
  Renegade: {
    name: "Renegade",
    team: "Renegade",
    objective: "Kill everybody",
    kills: "Infinite",
    revives: 0,
    notes: "The Renegade must kill the Outlaw last, or else the game ends and they lose.",
    required: false,
    minPlayers: 5,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Mute: {
    name: "Mute",
    team: "Innocents",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "The Mute may not speak, gesture, or otherwise communicate with other players for the duration of the game.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Noisemaker: {
    name: "Noisemaker",
    team: "Innocents",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "The Noisemaker may create noise by moving their body around (but not using vocals) when dead. This may not be used for communication of any sort, other than to draw attention to themselves.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Vampire: {
    name: "Vampire",
    team: "Innocents",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: "1*",
    notes: "The Vampire may, at any time, touch a dead person's neck to effectively steal their revive. This gives the Vampire one revive that can only be used on themself (similar to the Angel). However, this makes the dead person un-revivable, and if somebody tries to revive them, they must remain dead. This can only be done once per game.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Knight: {
    name: "Knight",
    team: "Innocents",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "The Knight must always only tell the truth. However, if they ever choose to lie (which is not against the rules), they must die immediately.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  },
  Knave: {
    name: "Knave",
    team: "Innocents",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "The Knave must always lie. However, if they ever choose to tell the truth (which is not against the rules), they must die immediately.",
    required: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    enabled: true
  }
};

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getAllRoles() {
  return Object.keys(allRoles);
}

function getRandomElem(arr, keep) {
  const index = rand(0, arr.length);
  const elem = arr[index];
  if (keep) console.log(elem, keep(elem));
  if (!keep || !keep(elem)) arr.splice(index, 1);
  return elem;
}

function getValidRoles(roles, playerCount) {
  return roles.filter(key => {
    const role = allRoles[key];
    return (
      role.enabled &&
      !role.required &&
      !role.isDependency &&
      role.minPlayers <= playerCount &&
      role.maxPlayers >= playerCount
    );
  })
}

function getRequiredRoles(roles) {
  return roles.filter(key => allRoles[key].required);
}

/*

isSelectable = enabled && !isDependency && minPlayers <= nPlayers && maxPlayers >= nPlayers

A. PREPROCESSING (if A is repeated 25 times, tell the user something went wrong)
  1. Create a new, filtered object that only contains valid roles
    1.1. isSelectable = enabled && !isDependency && minPlayers <= nPlayers && maxPlayers >= nPlayers
  2. From that, create a required roles object.
  3. Create an empty object to hold player-role pairs.

B. INITIAL DEALING (remove role from pool if it's unique - use a loop that iterates through players, not role pools)
  4. Deal out the required roles.
  5. Deal out roles from the rest of the pool.

C. POST-PROCESSING
  7. Check if any roles have dependencies, and if so:
    7.1. Find a RANDOM non-required, non-dependency and non-dependencies<=0 role that is owned by a player.
    7.2: Replace this role with the dependency.
  8. Repeat step 7 until checks pass or 7 is repeated 25 times (if so, restart from A).

*/


function dealRoles(players) {
  const playerCount = players.length;
  //  TODO: if playerCount < 3, return to previous page

  // A. PREPROCESSING
  const rolesArr = getAllRoles();
  let requiredRoles = getRequiredRoles(rolesArr);
  let validRoles = getValidRoles(rolesArr, playerCount);
  let playerRoles = {};

  // B. INITIAL DEALING
  while (requiredRoles.length > 0) {
    const player = getRandomElem(players);
    const role = getRandomElem(requiredRoles);
    playerRoles[player] = role;
  }

  while (players.length > 0) {
    const player = getRandomElem(players);
    // TODO: bouncing
    const role = getRandomElem(validRoles, role => !allRoles[role].unique);
    playerRoles[player] = role;
  }

  // C. POST-PROCESSING
  let checksPassed = false;
  let iterations = 0;
  while (!checksPassed && iterations < 25) {
    checksPassed = true;
    iterations++;

    for (const player in playerRoles) {
      const roleObj = allRoles[playerRoles[player]];

      for (const dependency of roleObj.dependencies) {
        if (Object.values(playerRoles).includes(dependency)) continue;
        checksPassed = false;

        // 7.1 & 7.2
        for (const player in playerRoles) {
          const roleObj = allRoles[playerRoles[player]];
          if (!roleObj.required && !roleObj.isDependency && roleObj.dependencies.length === 0) {
            playerRoles[player] = dependency;
            break;
          }
        }
      }
    }
  }
  if (!checksPassed) {
// TODO:    alert("Something went wrong with dependency resolution, please try again.");
    throw new Error("Dependency resolution failed after 25 iterations.");
  }

  return playerRoles;
}

console.log(dealRoles(["Alice", "Bob", "Charlie", "David", "Eve"]));

module.exports = { allRoles };
