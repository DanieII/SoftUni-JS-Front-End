function browserHistory(object, actions) {
  for (const actionAndSite of actions) {
    const [action, site] = actionAndSite.split(" ");

    if (action === "Clear") {
      object = {
        "Browser Name": object["Browser Name"],
        "Open Tabs": [],
        "Recently Closed": [],
        "Browser Logs": [],
      };
      continue;
    }

    if (action === "Open") {
      object["Open Tabs"].push(site);
      object["Browser Logs"].push(actionAndSite);
    } else if (action === "Close" && object["Open Tabs"].includes(site)) {
      object["Open Tabs"].splice(object["Open Tabs"].indexOf(site), 1);
      object["Recently Closed"].push(site);
      object["Browser Logs"].push(actionAndSite);
    }
  }

  for (const [browserFeature, content] of Object.entries(object)) {
    if (browserFeature === "Browser Name") {
      console.log(content);
    } else {
      console.log(`${browserFeature}: ${content.join(", ")}`);
    }
  }
}
