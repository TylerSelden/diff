import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

import { Header, Paragraph } from "./dropdown-components";

const Rules = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="col mt-4 mb-1 rounded bg-white">
      <button
        className="btn w-100 py-3 d-flex justify-content-between align-items-center"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="fw-bold">Game Rules</span>
        <span className="d-flex">{dropdownOpen ? (<FaCaretDown />) : (<FaCaretRight />)}</span>
      </button>

      {dropdownOpen && (
        <div className="p-3">
          <Header>Overview</Header>
          <Paragraph>
            The premise of Different Tag is simple: There is a murderer loose (the Outlaw), and game ends as soon as they die.
            Each player is given a role, all of which have varying objectives and abilities. A player will score a win if
            they've completed their objective by the end of the game. The roles are divided into teams, as many roles share
            a common objective. This helps keep track of who won and lost.
          </Paragraph>
          <Header>Gameplay</Header>
          <Paragraph>
            Before each round begins, everybody is assigned a role, which they must keep secret. After the roles are assigned,
            the game begins. To kill other players, the game uses a backstabbing mechanic. This means that to murder somebody,
            you must tag them on their back with your hand. When this happens, they are killed, and must lay on the ground,
            unmoving, until either they're revived or the game ends. Some players have the ability to revive others as well.
            This is done by tapping them anywhere on the body and letting them know they’ve been revived. The round ends when
            the Outlaw is either killed or the last player remaining.
          </Paragraph>
          <Header>Role Assignments</Header>
          <Paragraph>
            This site will automatically assign roles to each player. To see your role, tap or click the "Show Role" button
            next to your name. After you read your role and all of the important information that comes with it, tap the "Hide"
            button so nobody else can see who you are. Each player's role is only viewable once, to prevent others from peeking
            at it. If you do not like your role, you may call Mulligan (this can only be done once per game). Doing this will
            regenerate everybody's role, so make sure it's okay with other players first!
          </Paragraph>
          <Header>Notes</Header>
          <div className="px-3 mb-5">
            <ul className="ms-0 ps-3">
              <li>As soon as the Outlaw is killed, they must announce that they were the Outlaw, so the game can end.</li>
              <li>Each game must have at least 3 people. One Outlaw is always guaranteed.</li>
              <li>Dead players must lay unmoving until the game ends until they are revived. They may not speak, gesture or otherwise
                communicate with other players unless otherwise specified.</li>
              <li>The back of a player includes the backs of the shoulders (above armpits) and extends down to the waist. A kill is
                based on the honors system, and it’s ultimately up to the player who was killed to decide whether or not the hit
                landed.</li>
              <li>Pretending to be dead or backing up against something to become untaggable are both against the rules.</li>
              <li>If a player is revived, they may not continue to "play dead", they must get up right away.</li>
              <li>Multiple players can all score a win from the same round, unless otherwise specified.</li>
              <li>A player can still win if they’re dead, unless otherwise specified.</li>
              <li>Many teams need at least one player on that team to be alive at the end of the round to score a win. These teams
                include: Townspeople, Outlaw, Bounty Hunter, President, & Renegade.</li>
              <li>If any individual Townsperson kills more than 2 Townspeople (or all Townspeople), the Townspeople all lose.</li>
              <li>Unless otherwise specified, a kill means that the player is dead at the end of the game. For example, if the Bounty
                Hunter kills their target, but the target gets revived and are alive by the end of the game, the Bounty Hunter loses.</li>
              <li>Nobody (especially the Guard) may announce who they are until the game officially starts.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rules;
