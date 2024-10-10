import { CodeIcon } from "@heroicons/react/outline";
import { DetailedFeatureLink } from "./Feature";
import { GitHubIcon } from "./Icons";

export const RepoArea = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: `A marketplace for on-demand, multi-party crypto infrastructure`,
          name: "Tangle Network Repo",
        }}
        href="https://github.com/tangle-network/tangle"
      />
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: `Documentation for the Tangle Network`,
          name: "Tangle Docs Repo",
        }}
        href="https://github.com/tangle-network/tangle-docs"
      />
    </div>
  );
};

export const StatsdApp = () => {
  return (
    <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-10 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "Monorepo for Webb dApps",
          name: "webb-dapp",
        }}
        href="https://github.com/tangle-network/webb-dapp"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: CodeIcon,
          description: `The GraphQL Playground provides a way to query the SubQuery API`,
          name: "GraphQL Playground",
        }}
        href="https://standalone-subql.tangle.tools/graphql"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: GitHubIcon,
          description: "SubQuery implementation for DKG and Webb Networks",
          name: "webb-subql",
        }}
        href="https://github.com/tangle-network/webb-subql"
      ></DetailedFeatureLink>
    </div>
  );
};
