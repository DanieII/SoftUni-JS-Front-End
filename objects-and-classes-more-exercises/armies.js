function armies(input) {
  const leaders = {};
  for (const action of input) {
    if (action.includes("arrives")) {
      const name = action.split(" arrives")[0];
      if (!leaders.hasOwnProperty(name)) {
        leaders[name] = [];
      }
    } else if (action.includes(":")) {
      const [leader, armyInfo] = action.split(": ");
      let [armyName, armyCount] = armyInfo.split(", ");
      armyCount = Number(armyCount);

      if (!leaders.hasOwnProperty(leader)) {
        continue;
      }

      leaders[leader].push({ armyName, armyCount });
    } else if (action.includes("+")) {
      const [armyName, armyCount] = action.split(" + ");

      for (const [leader, armies] of Object.entries(leaders)) {
        let found = false;

        for (const army of armies) {
          if (army.armyName === armyName) {
            army.armyCount += Number(armyCount);
            found = true;
            break;
          }
        }

        if (found) {
          break;
        }
      }
    } else if (action.includes("defeated")) {
      const [leader, _] = action.split(" defeated");

      for (const [currentLeader, _] of Object.entries(leaders)) {
        if (leader === currentLeader) {
          delete leaders[leader];
          break;
        }
      }
    }
  }

  function getTotalArmyCount(armies) {
    return armies.reduce((sum, army) => sum + army.armyCount, 0);
  }

  const sortedLeaders = Object.entries(leaders).sort(
    (a, b) => getTotalArmyCount(b[1]) - getTotalArmyCount(a[1]),
  );

  for (const [leader, armies] of sortedLeaders) {
    const armyCount = getTotalArmyCount(armies);

    console.log(`${leader}: ${armyCount}`);

    const sortedArmies = armies.sort((a, b) => b.armyCount - a.armyCount);

    for (const army of sortedArmies) {
      console.log(`>>> ${army.armyName} - ${army.armyCount}`);
    }
  }
}
