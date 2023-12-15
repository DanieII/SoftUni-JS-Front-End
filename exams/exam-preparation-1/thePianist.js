function thePianist(info) {
  const initialPiecesCount = info.shift();
  const pieces = {};

  for (let i = 0; i < initialPiecesCount; i++) {
    const pieceInfo = info.shift();
    const [piece, composer, key] = pieceInfo.split("|");

    // if (!pieces.hasOwnProperty(composer)) {
    //   pieces[piece] = {};
    // }

    pieces[piece] = { composer, key };
  }

  let command = info.shift();

  while (command !== "Stop") {
    command = command.split("|");
    const action = command.shift();

    if (action === "Add") {
      const [piece, composer, key] = command;

      if (pieces.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        pieces[piece] = { composer, key };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`,
        );
      }
    } else if (action === "Remove") {
      const [piece] = command;

      if (pieces.hasOwnProperty(piece)) {
        delete pieces[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`,
        );
      }
    } else if (action === "ChangeKey") {
      const [piece, newKey] = command;

      if (pieces.hasOwnProperty(piece)) {
        pieces[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`,
        );
      }
    }

    command = info.shift();
  }

  for (const [piece, pieceInfo] of Object.entries(pieces)) {
    console.log(
      `${piece} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`,
    );
  }
}
