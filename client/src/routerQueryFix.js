export default (InComponent) => {
  return (props) => {
    const newProps = { ...props };

    // apparently with nextjs, window in this context is discoverable inside of "global"
    if (
      global.location !== undefined &&
      (newProps.router.query === null ||
        Object.keys(newProps.router.query).length == 0)
    ) {
      const query = {};
      for (const entry of new URLSearchParams(
        global.location.search
      ).entries()) {
        query[entry[0]] = entry[1];
      }

      newProps.router.query = query;
    }

    const routerSplit = newProps.router.route
      .substring(1)
      .split("?")[0]
      .split("/");
    const pathSplit = newProps.router.route
      .substring(1)
      .split("?")[0]
      .split("/");

    const pathKeys = {};
    for (let i = 0; routerSplit.length > i; i++) {
      const currentString = routerSplit[i];
      if (
        currentString[0] === "[" &&
        currentString[currentString.length - 1] === "]"
      ) {
        pathKeys[currentString.substring(1, currentString.length - 1)] =
          pathSplit[i];
      }
    }

    newProps.router.query = { ...newProps.router.query, ...pathKeys };
    return <InComponent {...newProps} />;
  };
};
