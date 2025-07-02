const allRoles = {
  Outlaw: {
    name: "Outlaw",
    team: "Outlaw",
    objective: "Be the last player alive",
    kills: "Infinite",
    revives: 0,
    notes: "This is the only role that is revealed upon death, since the game ends as soon as they die.",
    required: true,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    enabled: true
  },
  Townsperson: {
    name: "Townsperson",
    team: "Townspeople",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "If all Townspeople are dead by the end of the game, they all lose.",
    required: false,
    isFallback: true,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: false,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 3,
    sandbox: false
  },
  Angel: {
    name: "Angel",
    team: "Townspeople",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 1,
    notes: "As soon as the Angel is killed, if they still haven't used their revive, they must shout 'Angel' or die. This effectively burns their one revive, using it on themselves instantly.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Doctor: {
    name: "Doctor",
    team: "Townspeople",
    objective: "Ensure the Outlaw doesn't win",
    kills: 0,
    revives: "1 per other player",
    notes: "The Doctor, unlike the Angel, cannot use a revive on themselves. In addition, they cannot kill other players. Doctors also cannot revive the same player more than once in a single game.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Powderman: {
    name: "Powderman",
    team: "Townspeople",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "If the Powderman is killed, their attacker will also be killed. However, this only happens the first time they are killed. If they are the last Innocent alive and the Outlaw kills them, the game ends and both the Outlaw and the Townspeople lose.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Sharpshooter: {
    name: "Sharpshooter",
    team: "Townspeople",
    objective: "Ensure the Outlaw doesn't win",
    kills: 1,
    revives: 0,
    notes: "The Sharpshooter can kill anybody within earshot by shouting to them. This counts as using the Sharpshooter's one kill.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Jester: {
    name: "Jester",
    team: "Jester",
    objective: "Get killed by another player",
    kills: 0,
    revives: 0,
    notes: "As long as the Jester is not killed by a member of the Outlaw team, they win.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  "Bounty Hunter": {
    name: "Bounty Hunter",
    team: "Bounty Hunter",
    objective: "Ensure that, by the end of the game, your target is dead and you are alive",
    kills: "1*",
    revives: 0,
    notes: "*The Bounty Hunter can only kill one player, but may kill them as many times as they want. Their chosen player does not need to be their target.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Spy: {
    name: "Spy",
    team: "Spy",
    objective: "Determine the role of every player",
    kills: "Infinite",
    revives: 0,
    notes: "Before roles are revealed at the end of the game, the Spy, if present, must come forth and make their guesses. If they guess all the roles correctly, they win.",
    required: false,
    isFallback: false,
    minPlayers: 5,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  President: {
    name: "President",
    team: "President",
    objective: "Be alive by the end of the game",
    kills: 0,
    revives: 0,
    notes: "The President must reveal their role at the beginning of the game. The President will lose if they are killed. The President cannot exist without the Guard.",
    required: false,
    isFallback: false,
    minPlayers: 5,
    maxPlayers: Infinity,
    unique: true,
    dependencies: ["Guard"],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Guard: {
    name: "Guard",
    team: "President",
    objective: "Ensure the President is alive by the end of the game",
    kills: "Infinite",
    revives: 0,
    notes: "The Guard may not reveal their role until the President does. Even if the Guard dies, as long as the President wins, the Guard does as well. The Guard cannot exist without the President.",
    required: false,
    isFallback: false,
    minPlayers: 5,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: true,
    dependencyOf: "President",
    bounces: 0,
    sandbox: false
  },
  Renegade: {
    name: "Renegade",
    team: "Renegade",
    objective: "Kill everybody",
    kills: "Infinite",
    revives: 0,
    notes: "The Renegade must kill the Outlaw last, or else the game ends and they lose.",
    required: false,
    isFallback: false,
    minPlayers: 5,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Mute: {
    name: "Mute",
    team: "Townspeople",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "The Mute may not speak, gesture, or otherwise communicate with other players for the duration of the game.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Noisemaker: {
    name: "Noisemaker",
    team: "Townspeople",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "The Noisemaker may create noise by moving their body around (but not using vocals) when dead. This may not be used for communication of any sort, other than to draw attention to themselves.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Vampire: {
    name: "Vampire",
    team: "Townspeople",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: "1*",
    notes: "The Vampire may, at any time, touch a dead person's neck to effectively steal their revive. This gives the Vampire one revive that can only be used on themself (similar to the Angel). However, this makes the dead person un-revivable, and if somebody tries to revive them, they must remain dead. This can only be done once per game.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Knight: {
    name: "Knight",
    team: "Townspeople",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "The Knight must always only tell the truth. However, if they ever choose to lie (which is not against the rules), they must die immediately.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  },
  Knave: {
    name: "Knave",
    team: "Townspeople",
    objective: "Ensure the Outlaw doesn't win",
    kills: "Infinite",
    revives: 0,
    notes: "The Knave must always lie. However, if they ever choose to tell the truth (which is not against the rules), they must die immediately.",
    required: false,
    isFallback: false,
    minPlayers: 0,
    maxPlayers: Infinity,
    unique: true,
    dependencies: [],
    isDependency: false,
    dependencyOf: "",
    bounces: 0,
    sandbox: false
  }
};

const teams = {
  Outlaw: {
    objective: "Be the last player alive",
    roles: Object.keys(allRoles).filter(role => allRoles[role].team === "Outlaw")
  },
  Townspeople: {
    objective: "Ensure the Outlaw doesn't win",
    roles: Object.keys(allRoles).filter(role => allRoles[role].team === "Townspeople")
  },
  Jester: {
    objective: "Get killed by another player",
    roles: Object.keys(allRoles).filter(role => allRoles[role].team === "Jester")
  },
  "Bounty Hunter": {
    objective: "Ensure that, by the end of the game, your target is dead and you are alive",
    roles: Object.keys(allRoles).filter(role => allRoles[role].team === "Bounty Hunter")
  },
  Spy: {
    objective: "Determine the role of every player",
    roles: Object.keys(allRoles).filter(role => allRoles[role].team === "Spy")
  },
  President: {
    objective: "Ensure the President is alive by the end of the game",
    roles: Object.keys(allRoles).filter(role => allRoles[role].team === "President")
  },
  Renegade: {
    objective: "Kill everybody",
    roles: Object.keys(allRoles).filter(role => allRoles[role].team === "Renegade")
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getAllRoles() {
  return Object.keys(allRoles);
}

function getRandomElem(arr, keep) {
  const index = rand(0, arr.length);
  const elem = arr[index];
  if (!keep || !keep(elem)) arr.splice(index, 1);
  return elem;
}

function getValidRoles(roles, playerCount, rolesDisabled) {
  return roles.filter(key => {
    const role = allRoles[key];
    return (
      roleIsEnabled(rolesDisabled, playerCount, role.name) &&
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

function roleIsEnabled(rolesDisabled, playerCount, role) {
  const roleData = allRoles[role];
  if (roleData.isDependency && !roleIsEnabled(rolesDisabled, playerCount, roleData.dependencyOf)) return false;
  if (playerCount < roleData.minPlayers || playerCount > roleData.maxPlayers) return false;
  if (rolesDisabled.includes(role)) return false;
  return true;
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
  9. Replace role names with full objects.

*/

function dealRoles(playersArr, rolesDisabled) {
  let players = [...playersArr];
  const playerCount = players.length;

  // A. PREPROCESSING
  const rolesArr = getAllRoles();
  let requiredRoles = getRequiredRoles(rolesArr);
  let validRoles = getValidRoles(rolesArr, playerCount, rolesDisabled);
  let playerRoles = {};

  // B. INITIAL DEALING
  while (requiredRoles.length > 0) {
    const player = getRandomElem(players);
    const role = getRandomElem(requiredRoles);
    playerRoles[player] = role;
  }

  let bounces = Object.fromEntries(
    validRoles.map(role => [role, allRoles[role].bounces])
  );
  while (players.length > 0) {
    const role = getRandomElem(validRoles, role => !allRoles[role].unique || bounces[role] > 0);
    if (bounces[role] > 0) {
      bounces[role]--;
      continue;
    } else {
      bounces[role] = allRoles[role].bounces;
    }
    const player = getRandomElem(players);
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
  if (!checksPassed) return alert("Something went wrong with dependency resolution, please try again.");

  for (const player in playerRoles) playerRoles[player] = allRoles[playerRoles[player]];
  return playerRoles;
}

module.exports = { allRoles, teams, roleIsEnabled, dealRoles };
