/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "type-enum": [
      2,
      "always",
      [
        "chore",
        "feat",
        "fix",
        "hotfix",
        "docs",
        "style",
        "ci",
        "build",
        "test",
        "refactor",
        "revert",
        "perf",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        "deps",
        "cli",
        "core",
        "release",
        "repo"
      ]
    ]
  }
}
