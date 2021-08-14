describe("traverser", () => {
  it("works", () => {
    const traverserFactory = traverserFactoryFactory([
      {
        subTraverserType: "interface",
        subTraverser: (value, context) => {
          // Todo, build a subtraverser that will interate through
          // all keys of an index and trigger the next value
        },
      },
      {
        subTraverserType: "union",
        subTraverser: (value, context) => {
          // Todo, build a subtraverser that will interate through
          // all values in a typescript union
        }
      },
      {
        subTraverserType: "intersection",
        subTraverser: (value, context) => {
          // Todo, build a subtraverser that will interate through
          // all values in a typescript union
        }
      },
    ]);
    const avatarTraverserFactory = traverserFactory({
      Person: {
        subTraverser: "interface",
        extends: "BasePerson",
        properties: {
          friends: "Person",
        }
      },
      MultiDisciplinaryPerson: {
        subTraverser: "union",
        unionedKeys
      },
      BasePerson: {
        
      },
      BenderPerson: {

      },
      WeaponPerson: {

      },

    });
    const avatarTraverser;
  });
});
