function inventory(input) {
  let heroes = [];

  input.forEach((hero) => {
    const [heroName, heroLevel, items] = hero.split(" / ");
    heroes.push({ heroName, heroLevel, items });
  });

  const sortedHeroes = heroes.sort(
    (heroA, heroB) => heroA.heroLevel - heroB.heroLevel,
  );

  sortedHeroes.map((hero) =>
    console.log(
      `Hero: ${hero.heroName}\nlevel => ${hero.heroLevel}\nitems => ${hero.items}`,
    ),
  );
}
