import Cypher from "@neo4j/cypher-builder";
import neo4j from "neo4j-driver";

console.log("Trying to connect to Neo4j...");
const driver = neo4j.driver(
  "neo4j+s://a376baf6.databases.neo4j.io",
  neo4j.auth.basic("neo4j", "b-qGShn-jCFwILvKysiPRHDGCf7aNLrKKMl-XNlcGA4"),
);

const config = new Cypher.Node({ labels: ["_Config"] });
const createNodeLabelsConfig = new Cypher.Create(config).set([
  config.property("name"),
  new Cypher.Param("NodeLabels"),
]);
const createRelationshipTypesConfig = new Cypher.Create(config).set([
  config.property("name"),
  new Cypher.Param("RelationshipTypes"),
]);

const runQuery = async () => {
  const nodeLabelsQuery = createNodeLabelsConfig.build();
  console.log(
    await driver.executeQuery(nodeLabelsQuery.cypher, nodeLabelsQuery.params),
  );

  const relationshipTypesQuery = createRelationshipTypesConfig.build();
  console.log(
    await driver.executeQuery(
      relationshipTypesQuery.cypher,
      relationshipTypesQuery.params,
    ),
  );

  await driver.close();
};

runQuery().catch((error) => {
  console.error(error);
  process.exit(1);
});
const nodeLabelsQuery = createNodeLabelsConfig.build();
console.log(
  await driver.executeQuery(nodeLabelsQuery.cypher, nodeLabelsQuery.params),
);

const relationshipTypesQuery = createRelationshipTypesConfig.build();
console.log(
  await driver.executeQuery(
    relationshipTypesQuery.cypher,
    relationshipTypesQuery.params,
  ),
);

await driver.close();
